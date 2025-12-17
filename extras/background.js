const CONFIG = {
    dotSize: { min: 28, max: 60, divider: 24 },
    gapMultiplier: 0.35,
    maxOffset: 6,
    defaultOffset: 4,
    transitionSpeed: 0.85,
    resizeDebounce: 120,
    staticOffset: 6.5,
    colors: {
        bg: "transparent",
        dot: "#5c2a3d",       // Darker primary color
        shadowDark: "#000000", // Hex for shadow
        shadowLight: "#ffffff" // Hex for highlight
    },
    shadowOpacity: 0.4 // Opacity handled by the helper function
};

const calculateDotSize = (width) =>
    Math.max(
        CONFIG.dotSize.min,
        Math.min(CONFIG.dotSize.max, Math.round(width / CONFIG.dotSize.divider))
    );

const calculateGap = (baseSize) => Math.round(baseSize * CONFIG.gapMultiplier);

const calculateGridDimensions = (width, height, baseSize, gap) => ({
    cols: Math.ceil((width - gap * 2) / (baseSize + gap)),
    rows: Math.ceil((height - gap * 2) / (baseSize + gap))
});

const getRandomOffset = () =>
    Math.random() < 0.5 ? CONFIG.defaultOffset : -CONFIG.defaultOffset;

const calculateDistance = (x1, y1, x2, y2) =>
    Math.hypot(x2 - x1, y2 - y1) + 0.0001;

const normalizeVector = (dx, dy, distance) => ({
    x: dx / distance,
    y: dy / distance
});

const calculateTarget = (mouseX, mouseY, centerX, centerY) => {
    const dx = mouseX - centerX;
    const dy = mouseY - centerY;
    const distance = calculateDistance(centerX, centerY, mouseX, mouseY);
    const normalized = normalizeVector(dx, dy, distance);

    return {
        x: Math.round(normalized.x * CONFIG.maxOffset),
        y: Math.round(normalized.y * CONFIG.maxOffset)
    };
};

const calculateShrinkFactor = (distance, radius) =>
    distance < radius ? distance / radius : 1;

const interpolate = (current, target, speed) =>
    current + (target - current) * speed;

const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

const createShadowStyle = (x, y, darkColor, lightColor, opacity) =>
    `${x}px ${y}px 0 ${hexToRgba(
        darkColor,
        opacity
    )}, ${-x}px ${-y}px 0 ${hexToRgba(lightColor, opacity)}`;

const isPointInRect = (x, y, rect) =>
    x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

const createDotElement = () => {
    const el = document.createElement("div");
    el.className = "dot";
    el.setAttribute("aria-hidden", "true");
    return el;
};

const getDotCenter = (element) => {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
    };
};

const getDotRadius = (element) =>
    parseFloat(getComputedStyle(element).width) / 2;

const applyShadow = (element, x, y, darkColor, lightColor, opacity) => {
    element.style.boxShadow = createShadowStyle(
        x,
        y,
        darkColor,
        lightColor,
        opacity
    );
};

const createDot = (element) => {
    const initialX = getRandomOffset();
    const initialY = getRandomOffset();

    return {
        element,
        offset: { x: initialX, y: initialY },
        target: { x: initialX, y: initialY },
        center: { x: 0, y: 0 }
    };
};

const updateDotCenter = (dot) => ({
    ...dot,
    center: getDotCenter(dot.element)
});

const updateDotTarget = (dot, mouseX, mouseY) => ({
    ...dot,
    target: calculateTarget(mouseX, mouseY, dot.center.x, dot.center.y)
});

const animateDot = (dot, mouseX, mouseY, config) => {
    const dx = mouseX - dot.center.x;
    const dy = mouseY - dot.center.y;
    const distance = calculateDistance(
        dot.center.x,
        dot.center.y,
        mouseX,
        mouseY
    );
    const radius = getDotRadius(dot.element);
    const shrinkFactor = calculateShrinkFactor(distance, radius);

    const targetX = dot.target.x * shrinkFactor;
    const targetY = dot.target.y * shrinkFactor;

    const newOffsetX = interpolate(dot.offset.x, targetX, config.transitionSpeed);
    const newOffsetY = interpolate(dot.offset.y, targetY, config.transitionSpeed);

    const roundedX = Math.round(newOffsetX);
    const roundedY = Math.round(newOffsetY);

    applyShadow(
        dot.element,
        roundedX,
        roundedY,
        config.colors.shadowDark,
        config.colors.shadowLight,
        config.shadowOpacity
    );

    return {
        ...dot,
        offset: { x: newOffsetX, y: newOffsetY }
    };
};

const buildGrid = (gridElement, config) => {
    const baseSize = calculateDotSize(window.innerWidth);
    const gap = calculateGap(baseSize);
    const { cols, rows } = calculateGridDimensions(
        window.innerWidth,
        window.innerHeight,
        baseSize,
        gap
    );

    document.documentElement.style.setProperty("--dot-size", `${baseSize}px`);
    document.documentElement.style.setProperty("--gap", `${gap}px`);

    // Clear grid
    gridElement.innerHTML = "";
    gridElement.style.gridTemplateColumns = `repeat(${cols}, var(--dot-size))`;

    const dotElements = Array.from({ length: rows * cols }, () => {
        const element = createDotElement();
        gridElement.appendChild(element);
        return element;
    });

    void gridElement.offsetHeight; // Force layout
    const dots = dotElements.map(createDot).map((dot) => {
        const updatedDot = updateDotCenter(dot);
        applyShadow(
            updatedDot.element,
            updatedDot.offset.x,
            updatedDot.offset.y,
            config.colors.shadowDark,
            config.colors.shadowLight,
            config.shadowOpacity
        );
        return updatedDot;
    });

    return dots;
};

const initGrid = () => {
    const gridElement = document.getElementById("grid");
    if (!gridElement) return;

    let state = {
        dots: buildGrid(gridElement, CONFIG),
        mouse: {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2
        },
        isActive: false,
        rafId: null
    };

    const updateColors = () => {
        // These vars are used by CSS, but since we are handling colors in JS config for the dots, 
        // we mainly ensure the CSS vars match if needed. 
        // Actually the CSS uses var(--dot-color) so let's set it.
        document.documentElement.style.setProperty("--dot-color", CONFIG.colors.dot);
    };
    updateColors();

    const animate = () => {
        state = {
            ...state,
            dots: state.dots.map((dot) =>
                animateDot(dot, state.mouse.x, state.mouse.y, CONFIG)
            )
        };
        state.rafId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
        if (!state.rafId) {
            animate();
        }
    }

    const handlePointerMove = (event) => {
        const pointer = event.touches?.[0] ?? event;
        const newMouse = { x: pointer.clientX, y: pointer.clientY };

        const rect = gridElement.getBoundingClientRect();
        const isInside = isPointInRect(newMouse.x, newMouse.y, rect);

        // Auto-start on first interaction
        if (!state.rafId) {
            startAnimation();
        }

        if (isInside) {
            void gridElement.offsetHeight;
            state = {
                ...state,
                isActive: true,
                mouse: newMouse,
                dots: state.dots.map((dot) => {
                    const centeredDot = updateDotCenter(dot);
                    return updateDotTarget(centeredDot, newMouse.x, newMouse.y);
                })
            };
        }
    };

    const handleResize = (() => {
        let timer = null;
        return () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                state = {
                    ...state,
                    dots: buildGrid(gridElement, CONFIG).map((dot) =>
                        updateDotTarget(dot, state.mouse.x, state.mouse.y)
                    )
                };
            }, CONFIG.resizeDebounce);
        };
    })();

    startAnimation();

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("touchmove", handlePointerMove, { passive: true });
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initGrid);
