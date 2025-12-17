// Nawara - Vanilla JavaScript
// No frameworks or build tools required

document.addEventListener('DOMContentLoaded', function () {

  // ==========================================
  // GLOBAL DATA (Centralized for access)
  // ==========================================

  const scholarshipsData = {
    'egypt-excellence': {
      title: 'Egyptian Excellence Scholarship',
      university: 'Cairo University',
      location: 'Cairo, Egypt',
      deadline: '15 Dec 2025',
      value: 'Full Tuition Coverage',
      about: 'The Egyptian Excellence Scholarship is a prestigious initiative by Cairo University designed to nurture the next generation of national leaders. This program supports high-achieving Egyptian students who demonstrate exceptional academic potential and a strong commitment to community service, enabling them to pursue undergraduate studies in Engineering or Medicine without financial burden.',
      benefits: [
        '100% coverage of tuition and laboratory fees',
        'Monthly living stipend of 3,000 EGP',
        'Access to exclusive research mentorship programs',
        'Laptop and academic materials allowance'
      ],
      requirements: [
        'Egyptian citizenship',
        'Minimum Thanaweya Amma score of 95%',
        'Proven record of extracurricular activities',
        'Submission of two academic reference letters'
      ]
    },
    'future-leaders': {
      title: 'Future Leaders Scholarship',
      university: 'Ain Shams University',
      location: 'Cairo, Egypt',
      deadline: '31 Jan 2026',
      value: 'Partial Coverage (75%)',
      about: 'The Future Leaders Scholarship at Ain Shams University is targeted at innovative students enrolling in the Faculty of Computer and Information Sciences. It aims to support tech-savvy individuals who have demonstrated problem-solving skills and a passion for technology, helping them bridge the gap between academic theory and practical application.',
      benefits: [
        '75% waiver on tuition fees for all 4 years',
        'Priority registration for university hackathons',
        'Free access to professional certification courses (e.g., AWS, Google)',
        'Internship placement support with local tech startups'
      ],
      requirements: [
        'Admission to the Faculty of Computer Science',
        'Minimum GPA of 3.5 in previous studies (if applicable)',
        'Portfolio of coding projects or GitHub repository',
        'Passing a technical interview'
      ]
    },
    'merit-based': {
      title: 'Merit-Based Academic Scholarship',
      university: 'Alexandria University',
      location: 'Alexandria, Egypt',
      deadline: '20 Feb 2026',
      value: 'Full Tuition',
      about: 'Alexandria University offers the Merit-Based Academic Scholarship to outstanding students entering the Faculty of Commerce. This program rewards academic consistency and dedication, aiming to produce top-tier graduates ready to tackle the challenges of the modern financial and business sectors in Egypt and the MENA region.',
      benefits: [
        'Full tuition waiver for the first academic year (renewable based on GPA)',
        'Accommodation in university dorms for non-residents',
        'Access to the university’s Business Incubator program',
        'Networking events with alumni in the banking sector'
      ],
      requirements: [
        'Top 5% ranking in high school graduating class',
        'High proficiency in English (IELTS 6.0 or equivalent)',
        'Personal statement on "The Future of Egypt’s Economy"',
        'Clean disciplinary record'
      ]
    },
    'global-arts': {
      title: 'Global Arts Scholarship',
      university: 'University of Arts London',
      location: 'London, UK',
      deadline: '15 Jun 2026',
      value: 'Full Coverage + Stipend',
      about: 'The Global Arts Scholarship is a highly competitive international award for exceptional creative talent from Egypt. It provides a life-changing opportunity to study at one of the world’s leading art and design institutions. The scholarship seeks students with a unique artistic voice who are committed to cross-cultural exchange and creative innovation.',
      benefits: [
        'Full tuition fees for a confirmed MA course',
        'Round-trip airfare from Cairo to London',
        'Monthly living allowance of £1,200',
        'Visa application fee reimbursement'
      ],
      requirements: [
        'Unconditional offer from UAL for a specialized MA program',
        'Comprehensive creative portfolio',
        'IELTS score of 6.5 minimum',
        'Essay on how your work contributes to global culture'
      ]
    },
    'daad-engineering': {
      title: 'DAAD Engineering Grant',
      university: 'TU Berlin',
      location: 'Berlin, Germany',
      deadline: '30 May 2026',
      value: 'Partial Grant (5000€/year)',
      about: 'The DAAD Engineering Grant fosters scientific cooperation between Egypt and Germany. It is designed for Egyptian engineering undergraduates or master’s students wishing to complete a semester exchange or a research project at TU Berlin. The program emphasizes intercultural experience and advanced technical research.',
      benefits: [
        'Annual grant of €5,000 to cover living costs',
        'Health insurance coverage in Germany',
        'Intensive German language course (2 months)',
        'Supervisor support at TU Berlin'
      ],
      requirements: [
        'Currently enrolled in an Engineering degree in Egypt',
        'German language proficiency (A2 level minimum)',
        'Detailed research proposal or study plan',
        'Approval from home university'
      ]
    }
  };

  const internshipsData = {
    'google-step': {
      title: 'Google STEP Internship',
      company: 'Google',
      location: 'Remote',
      duration: '12 Weeks',
      salary: 'Competitive Stipend',
      type: 'Summer Internship',
      responsibilities: [
        'Work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve.',
        'Design, develop, test, deploy, maintain and improve software.',
        'Manage individual project priorities, deadlines and deliverables.',
        'Participate in code reviews and learn from industry leaders.'
      ],
      requirements: [
        'Second year undergraduate student majoring in Computer Science or related field.',
        'Experience in one or more general purpose programming languages.',
        'Ability to speak and write in English fluently.',
        'Strong analytical and problem-solving skills.'
      ],
      perks: [
        'Mentorship from Google Engineers',
        'Networking events with other interns',
        'Virtual social activities',
        'Potential return offer for full-time'
      ]
    },
    'microsoft-sw': {
      title: 'Software Engineering Intern',
      company: 'Microsoft',
      location: 'Cairo, Egypt',
      duration: '3 Months',
      salary: 'Paid Internship',
      type: 'Full-time Intern',
      responsibilities: [
        'Develop software that empowers people and organizations.',
        'Collaborate with diverse teams to solve complex problems.',
        'Write clean, maintainable, and efficient code.',
        'Engage in agile development practices.'
      ],
      requirements: [
        'Pursuing a Bachelor’s or Master’s in Computer Science or related field.',
        'Solid understanding of data structures and algorithms.',
        'Proficiency in C#, Java, C++, or Python.',
        'Passion for technology and innovation.'
      ],
      perks: [
        'Hybrid work environment',
        'Access to Microsoft learning resources',
        'Health and wellness benefits',
        'Gym membership subsidy'
      ]
    },
    'amazon-ds': {
      title: 'Data Science Intern',
      company: 'Amazon',
      location: 'Remote / Cairo',
      duration: '12-16 Weeks',
      salary: 'Competitive',
      type: 'Summer Internship',
      responsibilities: [
        'Analyze large datasets to extract actionable insights.',
        'Build and deploy machine learning models.',
        'Collaborate with product managers and engineers.',
        'Visualize data trends for stakeholders.'
      ],
      requirements: [
        'Enrolled in Master’s or PhD in Data Science, CS, or Statistics.',
        'Experience with SQL, Python (Pandas, Scikit-learn).',
        'Knowledge of machine learning algorithms.',
        'Strong communication skills.'
      ],
      perks: [
        'AWS Certification vouchers',
        'Leadership speaker series',
        'Employee discount on Amazon.com',
        'Flexible working hours'
      ]
    },
    'meta-design': {
      title: 'Product Design Intern',
      company: 'Meta',
      location: 'London, UK',
      duration: '12 Weeks',
      salary: 'High Stipend + Housing',
      type: 'Summer Internship',
      responsibilities: [
        'Design flows and experiences that are simple and elegant.',
        'Take broad, conceptual ideas and turn them into useful products.',
        'Partner with PMs, engineers, and researchers.',
        'Contribute to high-level strategic decisions.'
      ],
      requirements: [
        'Portfolio featuring examples of interaction design work.',
        'Experience with tools like Figma, Sketch, or Adobe XD.',
        'Interest in product strategy and vision.',
        'Currently enrolled in a Design degree.'
      ],
      perks: [
        'Housing stipend for relocation',
        'Free meals on campus (if applicable)',
        'Meta Quest device for testing',
        'Design mentorship program'
      ]
    },
    'pg-business': {
      title: 'Business Analyst Intern',
      company: 'P&G',
      location: 'Alexandria, Egypt',
      duration: '2 Months',
      salary: 'Paid',
      type: 'Winter Internship',
      responsibilities: [
        'Analyze market trends and consumer behavior.',
        'Support brand management teams with data-driven insights.',
        'Prepare reports and presentations for senior leadership.',
        'Optimize supply chain logistics processes.'
      ],
      requirements: [
        'Undergraduate student in Business, Economics, or Engineering.',
        'Strong leadership and analytical skills.',
        ' Proficiency in MS Office (Excel, PowerPoint).',
        'Fluent in English and Arabic.'
      ],
      perks: [
        'Real responsibility effectively from Day 1',
        'P&G product care package',
        'Networking with senior executives',
        'Fast-track to management offers'
      ]
    },
    'gm-mech': {
      title: 'Mechanical Engineering Intern',
      company: 'General Motors',
      location: 'Cairo, Egypt',
      duration: '6 Months',
      salary: 'Standard Intern Salary',
      type: 'Summer/Fall',
      responsibilities: [
        'Support manufacturing engineering teams.',
        'Assist in vehicle assembly line optimization.',
        'Conduct quality control tests and inspections.',
        'Propose process improvements to reduce waste.'
      ],
      requirements: [
        'Engineering student (Mechanical, Mechatronics, or Automotive).',
        'Knowledge of CAD software (SolidWorks, AutoCAD).',
        'Hands-on experience (Formula Student is a plus).',
        'Ability to work in a shift-based environment.'
      ],
      perks: [
        'Hands-on factory experience',
        'Transportation provided',
        'Safety gear and training',
        'Career development workshops'
      ]
    }
  };

  // ==========================================
  // NAVIGATION & INITIALIZATION
  // ==========================================
  // Highlight active navigation link based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Search functionality (placeholder)
  const searchInputs = document.querySelectorAll('.input[type="text"]');
  searchInputs.forEach(input => {
    input.addEventListener('input', function (e) {
      console.log('Searching for:', e.target.value);
      // Add your search logic here
    });
  });

  // Button click handlers
  const filterButtons = document.querySelectorAll('.btn-outline');
  filterButtons.forEach(button => {
    if (button.textContent.includes('Filters')) {
      button.addEventListener('click', function () {
        alert('Filter functionality coming soon!');
      });
    }
  });

  // CV Upload Logic (Real Implementation)
  const uploadArea = document.querySelector('.upload-area');
  const fileInput = document.getElementById('cvFileInput');
  const resultsContainer = document.getElementById('analysisResults');
  const cvScoreDisplay = document.getElementById('cvScore');
  const detectedSectionsList = document.getElementById('detectedSections');
  const foundKeywordsContainer = document.getElementById('foundKeywords');
  const feedbackList = document.getElementById('feedbackList');
  const resetBtn = document.getElementById('resetAnalysisBtn');

  if (uploadArea && fileInput) {
    // Click area triggers file input
    uploadArea.addEventListener('click', () => fileInput.click());

    // Handle file selection
    fileInput.addEventListener('change', async function (e) {
      const file = e.target.files[0];
      if (file && file.type === 'application/pdf') {
        // Show loading state (optional)
        uploadArea.innerHTML = '<div class="icon-box"><i class="bx bx-loader-alt bx-spin"></i></div><h3>Analyzing...</h3>';

        try {
          const text = await extractTextFromPDF(file);
          const analysis = analyzeCV(text);
          displayResults(analysis);
        } catch (error) {
          console.error(error);
          alert("Error parsing PDF. Please try a different file.");
          resetUI();
        }
      } else if (file) {
        alert("Please upload a PDF file.");
      }
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', resetUI);
    }
  }

  function resetUI() {
    resultsContainer.style.display = 'none';
    uploadArea.style.display = 'block';
    uploadArea.innerHTML = `
        <div class="icon-box icon-box-accent upload-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>
        </div>
        <h3 class="upload-title">Upload Your CV</h3>
        <p class="upload-description">Drop your PDF or Word document here, or click to browse. We'll analyze it and provide actionable feedback.</p>
        <button class="btn btn-primary">Analyze My CV</button>
    `;
    fileInput.value = '';
  }

  async function extractTextFromPDF(file) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    let fullText = '';

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items.map(item => item.str).join(' ');
      fullText += pageText + ' ';
    }
    return fullText;
  }

  function analyzeCV(text) {
    const lowerText = text.toLowerCase();
    let score = 50; // Base score
    const foundSkills = [];
    const missingSections = [];
    const feedback = [];

    // 1. Section Detection
    const sections = ['education', 'experience', 'skills', 'projects', 'languages'];
    const foundSections = [];

    sections.forEach(sec => {
      if (lowerText.includes(sec)) {
        score += 5;
        foundSections.push(sec.charAt(0).toUpperCase() + sec.slice(1));
      } else {
        missingSections.push(sec);
        feedback.push(`Missing section: <strong>${sec.charAt(0).toUpperCase() + sec.slice(1)}</strong>`);
      }
    });

    // 2. Keyword Analysis (Tech Focused)
    const keywords = ['javascript', 'python', 'html', 'css', 'react', 'git', 'sql', 'c++', 'java', 'node', 'communication', 'leadership'];
    keywords.forEach(kw => {
      if (lowerText.includes(kw)) {
        score += 3;
        foundSkills.push(kw);
      }
    });

    // 3. Formatting/Length Checks
    if (text.length < 500) {
      score -= 10;
      feedback.push("Your CV seems a bit short. Elaborate more on your experiences.");
    } else if (text.length > 5000) {
      feedback.push("Your CV is quite long. Consider condensing it to 1-2 pages.");
    } else {
      score += 5;
    }

    // 4. Contact Info Check
    if (!lowerText.includes('@')) {
      score -= 20;
      feedback.push("CRITICAL: No email address detected!");
    }

    // Cap score
    score = Math.min(100, Math.max(0, score));

    return { score, foundSections, foundSkills, feedback };
  }

  function displayResults(data) {
    uploadArea.style.display = 'none';
    resultsContainer.style.display = 'block';

    // Animate Score
    let currentScore = 0;
    const interval = setInterval(() => {
      if (currentScore >= data.score) {
        clearInterval(interval);
      } else {
        currentScore++;
        cvScoreDisplay.textContent = currentScore;
        // Color logic
        const badge = document.querySelector('.score-badge');
        if (currentScore < 50) badge.style.background = '#ef4444';
        else if (currentScore < 80) badge.style.background = '#f59e0b';
        else badge.style.background = '#22c55e';
      }
    }, 20);

    // Sections
    detectedSectionsList.innerHTML = data.foundSections.map(sec =>
      `<li><span class="badge" style="background:#e0f2fe; color:#0369a1;">${sec}</span></li>`
    ).join('');

    // Skills
    foundKeywordsContainer.innerHTML = data.foundSkills.length ? data.foundSkills.map(skill =>
      `<span class="badge">${skill.toUpperCase()}</span>`
    ).join('') : '<span style="color:var(--color-muted)">No specific keywords found.</span>';

    // Feedback
    if (data.feedback.length === 0 && data.score > 80) {
      feedbackList.innerHTML = '<li><i class="bx bx-check-circle" style="color:green"></i> Great job! Your CV looks solid.</li>';
    } else {
      feedbackList.innerHTML = data.feedback.map(item =>
        `<li><i class="bx bx-info-circle"></i> ${item}</li>`
      ).join('');
    }
  }

  // ==========================================
  // DAILY QUOTE LOGIC
  // ==========================================
  const quoteTextEl = document.getElementById("quote-text");
  const newQuoteBtn = document.getElementById("new-quote-btn");

  if (quoteTextEl && newQuoteBtn) {
    async function loadQuote() {
      try {
        const response = await fetch("https://dummyjson.com/quotes/random");
        const data = await response.json();

        if (!data || !data.quote) throw new Error("Invalid quote data");

        quoteTextEl.textContent = `"${data.quote}"`;
        document.getElementById("quote-author").textContent = `— ${data.author || "Unknown"}`;

      } catch (error) {
        quoteTextEl.textContent = "“Stay focused. Your future is loading.”";
        document.getElementById("quote-author").textContent = "";
        console.error("Quote error:", error);
      }
    }

    loadQuote();
    newQuoteBtn.addEventListener("click", loadQuote);
  }

  console.log('Nawara app initialized successfully!');

  // ==========================================
  // MERGED LOGIC (Budget, Details, etc.)
  // ==========================================

  if (window.location.pathname.includes('budget.html')) {

    // --- Data Model ---
    let monthlyIncome = 4500;
    let expenses = [
      { category: 'Transport', amount: 600, icon: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" />', color: '#3b82f6' },
      { category: 'Taamia', amount: 1200, icon: '<path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" x2="6" y1="1" y2="4" /><line x1="10" x2="10" y1="1" y2="4" /><line x1="14" x2="14" y1="1" y2="4" />', color: '#22c55e' },
      { category: 'Groceries', amount: 800, icon: '<path d="M3 14h18" /><path d="M4 10h16" /><path d="M5 6h14" /><path d="M5 18h14" />', color: '#f59e0b' },
      { category: 'Matcha / Coffee', amount: 350, icon: '<path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />', color: '#8b5cf6' },
      { category: 'Utilities & Internet', amount: 200, icon: '<path d="M12 2v20M2 12h20" /><path d="M12 2a10 10 0 0 1 10 10M2 12a10 10 0 0 1 10-10" transform="rotate(-45 12 12)" />', color: '#ef4444' }
    ];

    let expensePieChart;
    let expenseBarChart;

    // --- DOM Elements ---
    const incomeDisplay = document.getElementById('monthlyIncomeDisplay');
    const totalExpensesDisplay = document.getElementById('totalExpensesDisplay');
    const remainingDisplay = document.getElementById('remainingDisplay');
    const expenseListContainer = document.getElementById('expenseListContainer');

    // Modal Elements
    const modal = document.getElementById('addExpenseModal');
    const openModalBtn = document.getElementById('addExpenseBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const confirmAddBtn = document.getElementById('confirmAddExpenseBtn');
    const typeInput = document.getElementById('expenseTypeInput');
    const amountInput = document.getElementById('expenseAmountInput');

    // --- Initialization ---
    initializeCharts();
    renderBudget();
    setupEventListeners();

    // --- Functions ---



    function initializeCharts() {
      const expenseCtx = document.getElementById('expensePieChart');
      const trendCtx = document.getElementById('expenseBarChart');

      if (expenseCtx) {
        expensePieChart = new Chart(expenseCtx, {
          type: 'pie',
          data: {
            labels: [],
            datasets: [{
              data: [],
              backgroundColor: ['#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899', '#6366f1'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom', labels: { font: { family: 'Bungee' }, color: '#334155' } }
            }
          }
        });
      }

      if (trendCtx) {
        expenseBarChart = new Chart(trendCtx, {
          type: 'bar',
          data: {
            labels: ['Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Total Expenses',
              data: [2900, 3100, 3150], // Initial dummy history, live total updates Jun
              backgroundColor: '#c05266',
              borderRadius: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
              y: { beginAtZero: true, grid: { color: '#e2e8f0' } },
              x: { grid: { display: false } }
            }
          }
        });
      }
    }

    function renderBudget() {
      // 1. Calculate Totals
      const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
      const remaining = monthlyIncome - totalExpenses;

      // 2. Update Summary Cards
      incomeDisplay.textContent = monthlyIncome.toLocaleString() + ' EGP';
      totalExpensesDisplay.textContent = totalExpenses.toLocaleString() + ' EGP';
      remainingDisplay.textContent = remaining.toLocaleString() + ' EGP';

      // 3. Render Expense List
      renderExpenseList();

      // 4. Update Charts
      updateCharts(totalExpenses);
    }

    function renderExpenseList() {
      expenseListContainer.innerHTML = '';
      expenses.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = `card action-card animate-fade-in delay-${index + 1}`;
        card.style.display = 'flex';
        card.style.alignItems = 'center';
        card.style.justifyContent = 'space-between';

        card.innerHTML = `
            <div style="display: flex; align-items: center; gap: 16px;">
              <div class="icon-box icon-box-primary" style="margin: 0; color: ${item.color || '#primary'};">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  ${item.icon || '<rect width="16" height="20" x="4" y="2" rx="2" />'}
                </svg>
              </div>
              <span style="font-weight: 700; color: var(--color-primary);">${item.category}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-weight: 700;">${item.amount.toLocaleString()} EGP</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                <polyline points="16 17 22 17 22 11" />
              </svg>
            </div>
          `;
        expenseListContainer.appendChild(card);
      });
    }

    function updateCharts(currentTotal) {
      if (expensePieChart) {
        expensePieChart.data.labels = expenses.map(e => e.category);
        expensePieChart.data.datasets[0].data = expenses.map(e => e.amount);
        expensePieChart.data.datasets[0].backgroundColor = expenses.map(e => e.color); // Sync Colors
        expensePieChart.update();
      }

      if (expenseBarChart) {
        // Update the last bar (current month) with the new total
        const data = expenseBarChart.data.datasets[0].data;
        data[2] = currentTotal; // Assuming 'Jun' is current
        expenseBarChart.update();
      }
    }

    function setupEventListeners() {
      // Modal Logic
      openModalBtn.onclick = () => { modal.style.display = "flex"; };
      closeModalBtn.onclick = () => { modal.style.display = "none"; };
      window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

      // Add Expense Logic
      confirmAddBtn.onclick = () => {
        const type = typeInput.value.trim();
        const amt = parseFloat(amountInput.value);

        if (type && amt > 0) {
          // Check for existing category
          const existingItem = expenses.find(e => e.category.toLowerCase() === type.toLowerCase());

          if (existingItem) {
            existingItem.amount += amt;
            // Move it to top or keep? Keep is fine.
          } else {
            // Add new
            expenses.push({
              category: type,
              amount: amt,
              icon: '<circle cx="12" cy="12" r="10" />', // Default icon
              color: getRandomColor()
            });
          }

          // Refresh UI
          renderBudget();

          // Reset and Close
          typeInput.value = '';
          amountInput.value = '';
          modal.style.display = "none";
        } else {
          alert('Please enter a valid description and amount.');
        }
      };
    }

    function getRandomColor() {
      const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#8b5cf6', '#ef4444', '#ec4899', '#6366f1', '#14b8a6'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }

  // Profile Page Tab Logic
  if (window.location.pathname.includes('user-profile.html')) {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabLinks.forEach(link => {
      link.addEventListener('click', () => {
        // Remove active class from all links and contents
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => {
          c.classList.remove('active');
          c.style.display = 'none';
        });

        // Add active class to clicked link
        link.classList.add('active');

        // Show target tab content
        const targetId = link.getAttribute('data-tab');
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
          targetContent.classList.add('active');
          targetContent.style.display = 'block'; // Or flex/grid depending on layout, block is safe for container
        }
      });
    });
  }

  // Scholarship Details Page Logic
  if (window.location.pathname.includes('scholarship-details.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    console.log("Scholarship Details Debug:");
    console.log("URL Search Params:", window.location.search);
    console.log("Extracted ID:", id);
    console.log("Available Data Keys:", Object.keys(scholarshipsData));

    if (scholarshipsData[id]) {
      console.log("Data found for ID:", id);
    } else {
      console.error("No data found for ID:", id);
    }



    if (id && scholarshipsData[id]) {
      const data = scholarshipsData[id];
      document.getElementById('schedTitle').textContent = data.title;
      document.getElementById('schedUni').textContent = data.university;
      document.getElementById('schedLoc').textContent = data.location;
      document.getElementById('schedDeadline').textContent = data.deadline;
      document.getElementById('schedValue').textContent = data.value;
      const aboutEl = document.getElementById('schedAbout');
      if (aboutEl) aboutEl.textContent = data.about;

      const benefitsList = document.getElementById('schedBenefits');
      if (benefitsList) benefitsList.innerHTML = data.benefits.map(item => `<li>${item}</li>`).join('');

      const requirementsList = document.getElementById('schedRequirements');
      if (requirementsList) requirementsList.innerHTML = data.requirements.map(item => `<li>${item}</li>`).join('');

      const applyLink = document.getElementById('applyLink');
      if (applyLink) applyLink.href = `scholarship-application.html?id=${id}`;
    }
  }

  // Internship Details Page Logic
  if (window.location.pathname.includes('internship-details.html')) {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');



    if (id && internshipsData[id]) {
      const data = internshipsData[id];
      document.getElementById('jobTitle').textContent = data.title;
      document.getElementById('jobCompany').textContent = data.company;
      document.getElementById('jobLocation').textContent = data.location;
      document.getElementById('jobDuration').textContent = data.duration;
      const salaryEl = document.getElementById('jobSalary');
      // Note: ID in HTML is jobSalary, treating it as Stipend/Salary
      if (salaryEl) salaryEl.textContent = data.salary;

      document.getElementById('jobType').textContent = data.type;

      // Lists
      const respList = document.getElementById('jobResponsibilities');
      if (respList) respList.innerHTML = data.responsibilities.map(r => `<li>${r}</li>`).join('');

      const reqList = document.getElementById('jobRequirements');
      if (reqList) reqList.innerHTML = data.requirements.map(r => `<li>${r}</li>`).join('');

      const perksList = document.getElementById('jobPerks');
      if (perksList) perksList.innerHTML = data.perks.map(p => `<li><i class='bx bx-check'></i> ${p}</li>`).join('');

      // Apply Link
      // Assuming the button in internship-details.html is just an anchor 
      // with class btn-primary and href="internship-application.html"
      // I need to add an ID to it or select it.
      // Let's check the HTML again. It DOES NOT have an ID.
      // It is: <a href="internship-application.html" class="btn btn-primary" ...>Apply Now</a>
      // I will select it by href logic or adding an ID is cleaner.
      // For now, let's select it carefully.
      const applyBtn = document.querySelector('a[href*="internship-application.html"]');
      if (applyBtn) {
        applyBtn.href = `internship-application.html?id=${id}`;
      }
    }
  }

  // News & Events Page Logic
  if (window.location.pathname.includes('news.html')) {
    const modal = document.getElementById('createEventModal');
    const openBtn = document.querySelector('button.btn-primary'); // The "Create Event" button
    const closeBtn = document.getElementById('closeModalBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const steps = document.querySelectorAll('.wizard-step');
    const indicators = document.querySelectorAll('.step-indicator');

    let currentStep = 1;

    // Open Modal
    if (openBtn) {
      openBtn.addEventListener('click', () => {
        if (modal) {
          modal.style.display = 'flex';
          // slight delay to allow display:block to apply before opacity transition
          setTimeout(() => {
            modal.classList.add('active');
          }, 10);
        }
      });
    }

    // Close Modal
    function closeModal() {
      if (modal) {
        modal.classList.remove('active');
        setTimeout(() => {
          modal.style.display = 'none';
          resetWizard();
        }, 300);
      }
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Close on outside click
    if (modal) {
      window.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal();
        }
      });
    }

    // Wizard Navigation
    if (nextBtn && prevBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentStep < 4) {
          currentStep++;
          updateWizard();
        } else {
          // Submit logic
          alert('Event created successfully! Submitting for approval...');
          closeModal();
        }
      });

      prevBtn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          updateWizard();
        }
      });
    }

    function updateWizard() {
      // Update Steps Visibility
      steps.forEach(step => {
        if (parseInt(step.dataset.step) === currentStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      // Update Indicators
      indicators.forEach(indicator => {
        const step = parseInt(indicator.dataset.step);
        if (step < currentStep) {
          indicator.className = 'step-indicator completed';
        } else if (step === currentStep) {
          indicator.className = 'step-indicator active';
        } else {
          indicator.className = 'step-indicator';
        }
      });

      // Update Buttons
      if (currentStep === 1) {
        prevBtn.style.visibility = 'hidden';
      } else {
        prevBtn.style.visibility = 'visible';
      }

      if (currentStep === 4) {
        nextBtn.textContent = 'Submit Event';
        nextBtn.classList.remove('btn-primary');
        nextBtn.style.backgroundColor = '#16a34a'; // Green for success/submit
        nextBtn.style.color = 'white';
      } else {
        nextBtn.textContent = 'Next Step';
        nextBtn.classList.add('btn-primary');
        nextBtn.style.backgroundColor = ''; // Reset inline style
        nextBtn.style.color = '';
      }
    }

    function resetWizard() {
      currentStep = 1;
      updateWizard();
      // Reset inputs would go here
    }
  }

  // Universal Filter Logic (Scholarships & Internships)
  // Check if we are on a page with filters by looking for the elements
  const searchInput = document.getElementById('searchInput');
  const cityFilter = document.getElementById('cityFilter');
  const majorFilter = document.getElementById('majorFilter');
  const deadlineFilter = document.getElementById('deadlineFilter');

  // If at least one filtering element exists, run the logic
  if (searchInput || cityFilter || majorFilter || deadlineFilter) {
    const items = document.querySelectorAll('.list-item');

    function filterItems() {
      const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
      const selectedCity = cityFilter ? cityFilter.value : 'all';
      const selectedMajor = majorFilter ? majorFilter.value : 'all';
      const selectedDeadline = deadlineFilter ? deadlineFilter.value : '';

      items.forEach(item => {
        let isVisible = true;

        // 1. Text Search
        if (searchTerm) {
          const titleEl = item.querySelector('.list-item-title');
          const subtitleEl = item.querySelector('.list-item-subtitle');
          const title = titleEl ? titleEl.textContent.toLowerCase() : '';
          const subtitle = subtitleEl ? subtitleEl.textContent.toLowerCase() : '';

          if (!title.includes(searchTerm) && !subtitle.includes(searchTerm)) {
            isVisible = false;
          }
        }

        // 2. City Filter
        if (isVisible && selectedCity !== 'all') {
          const itemCity = item.getAttribute('data-city');
          if (itemCity && itemCity !== selectedCity) isVisible = false;
        }

        // 3. Major Filter
        if (isVisible && selectedMajor !== 'all') {
          const itemMajor = item.getAttribute('data-major');
          if (itemMajor && itemMajor !== selectedMajor) isVisible = false;
        }

        // 4. Deadline Filter
        // Logic: Show items where deadline is AFTER or ON the selected date
        if (isVisible && selectedDeadline) {
          const itemDeadline = item.getAttribute('data-deadline');
          if (itemDeadline && itemDeadline < selectedDeadline) {
            isVisible = false;
          }
        }

        // Toggle Visibility
        // Use empty string to revert to CSS file definition (flex/block)
        item.style.display = isVisible ? '' : 'none';
      });
    }

    // Attach Listeners
    if (searchInput) searchInput.addEventListener('keyup', filterItems); // keyup feels more responsive than input sometimes, but input is better. Let's do input.
    if (searchInput) searchInput.addEventListener('input', filterItems);
    if (cityFilter) cityFilter.addEventListener('change', filterItems);
    if (majorFilter) majorFilter.addEventListener('change', filterItems);
    if (deadlineFilter) deadlineFilter.addEventListener('change', filterItems);

    // Run once on load to ensuring consistent state
    // filterItems(); 
  }

});
