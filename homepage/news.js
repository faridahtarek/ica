/**
 * News Feed Logic
 * Uses mock student news data for demonstration
 * To use real API: Get free key from https://open-platform.theguardian.com/access/
 */

// CONFIGURATION - Set to true to use real API, false for mock data
const USE_REAL_API = false;
const GUARDIAN_API_KEY = 'YOUR_API_KEY_HERE'; // Get free key from The Guardian
const API_URL = `https://content.guardianapis.com/search?q=university OR student OR education&section=education&show-fields=thumbnail,body&page-size=20&api-key=${GUARDIAN_API_KEY}`;

// Mock news data for demonstration
const MOCK_NEWS_DATA = [
  {
    title: "Cairo University Partners with MIT for AI Research Initiative",
    description: "A groundbreaking collaboration will bring cutting-edge artificial intelligence research to Egyptian students, with exchange programs and joint research projects starting in 2025.",
    image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    source: "Egypt Today",
    pubDate: "2024-12-15",
    url: "https://www.egypttoday.com/"
  },
  {
    title: "AUC Announces Full Scholarships for 100 Engineering Students",
    description: "The American University in Cairo has launched a new scholarship program covering full tuition for high-achieving engineering students from underrepresented communities.",
    image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    source: "Daily News Egypt",
    pubDate: "2024-12-14",
    url: "https://dailynewsegypt.com/"
  },
  {
    title: "Ain Shams University Launches Innovation & Gaming Hub",
    description: "A state-of-the-art facility featuring VR labs, co-working spaces, and a dedicated gaming arena is now open to all Engineering and CS students to foster creativity.",
    image_url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=600&h=400&fit=crop",
    source: "Campus News",
    pubDate: "2024-12-13",
    url: "#"
  },
  {
    title: "Student Startup from GUC Secures $500K in Seed Funding",
    description: "EduTech, a platform developed by GUC students, has raised significant funding to expand its AI-powered learning assistant across Egyptian universities.",
    image_url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
    source: "Startup Scene",
    pubDate: "2024-12-12",
    url: "#"
  },
  {
    title: "Egypt Signs Partnership Agreement with UK Universities",
    description: "The Ministry of Higher Education has signed agreements enabling dual-degree programs and student exchanges with top UK institutions including Oxford and Cambridge.",
    image_url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop",
    source: "Ministry of Higher Education",
    pubDate: "2024-12-10",
    url: "#"
  },
  {
    title: "Mansoura University Hosts International Robotics Competition",
    description: "Over 200 student teams from 15 countries will compete in the annual robotics championship, showcasing innovative solutions to real-world engineering challenges.",
    image_url: "https://images.unsplash.com/photo-1518770660439-4636190af036?w=600&h=400&fit=crop",
    source: "Tech Times",
    pubDate: "2024-12-09",
    url: "#"
  }
];

async function fetchNews() {
  const newsGrid = document.getElementById('newsGrid');

  // Show loading state
  newsGrid.innerHTML = `
    <div style="grid-column: 1/-1; text-align: center; padding: 40px;">
      <p style="color: var(--color-muted); font-size: 18px;">📰 Finding the latest student news...</p>
    </div>
  `;

  try {
    let articles = [];

    if (USE_REAL_API) {
      const response = await fetch(API_URL);

      if (!response.ok) {
        if (response.status === 401 || response.status === 403) throw new Error('Invalid API Key or permissions issue.');
        if (response.status === 429) throw new Error('Rate limit reached. Please try again later.');
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Guardian API Response:', data); // Debug logging

      // The Guardian API uses 'response.results'
      articles = data.response.results.map(article => ({
        title: article.webTitle,
        description: article.fields.body ? article.fields.body.substring(0, 200) + '...' : 'Click to read the full story...', // Truncate body for description
        image_url: article.fields.thumbnail,
        source: article.sectionName || 'The Guardian',
        pubDate: article.webPublicationDate,
        url: article.webUrl
      }));

    } else {
      // Simulate network delay for mock data
      await new Promise(resolve => setTimeout(resolve, 1000));
      articles = MOCK_NEWS_DATA;
    }

    // Render
    renderNews(articles);

  } catch (error) {
    console.error('Failed to fetch news:', error);
    newsGrid.innerHTML = `
      <div style="text-align:center; padding: 20px; grid-column: 1/-1;">
        <i class='bx bx-error-circle' style="font-size: 48px; color: var(--color-muted); margin-bottom: 16px;"></i>
        <p style="color: var(--color-muted); margin-bottom: 10px;">${error.message}</p>
        <p style="font-size: 14px; color: var(--color-muted);">
            Please check your internet connection or API key configuration.
        </p>
      </div>
    `;
  }
}

function filterNews(articles) {
  return articles.filter(article => {
    const title = (article.title || '').toLowerCase();
    const description = (article.description || '').toLowerCase();
    const content = (title + ' ' + description);

    return STUDENT_KEYWORDS.some(keyword => content.includes(keyword.toLowerCase()));
  });
}

function renderNews(articles) {
  const newsGrid = document.getElementById('newsGrid');
  newsGrid.innerHTML = ''; // Clear loading/existing content

  if (articles.length === 0) {
    newsGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 40px;">
            <p style="color: var(--color-muted);">No relevant student news found right now. Try again later!</p>
        </div>
    `;
    return;
  }

  articles.forEach((article, index) => {
    // NewsData.io field names: image_url, pubDate, source_id, link (not url)
    const hasImage = article.image_url && article.image_url !== 'null';
    const imageUrl = hasImage ? article.image_url : 'https://placehold.co/600x400/e2e8f0/1e293b?text=News';

    const publishedDate = article.pubDate ? new Date(article.pubDate).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric'
    }) : 'Recent';

    const sourceName = article.source || 'News Source';
    const articleUrl = article.url || '#';

    const card = document.createElement('article');
    card.className = `card action-card animate-fade-in delay-${(index % 3) + 1}`;

    // Improved layout structure
    card.innerHTML = `
      <div style="display: flex; gap: 24px; align-items: flex-start;">
        <!-- Image Container -->
        <div style="flex-shrink: 0; width: 220px; aspect-ratio: 16/9; border-radius: 12px; overflow: hidden; background: #f1f5f9; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <img src="${imageUrl}" alt="${article.title || 'News'}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;" onerror="this.src='https://placehold.co/600x400/e2e8f0/1e293b?text=News'">
        </div>
        
        <!-- Content Container -->
        <div style="flex: 1; min-width: 0; display: flex; flex-direction: column; justify-content: center;">
          
          <div class="article-meta" style="margin-bottom: 12px; display: flex; align-items: center; gap: 12px;">
            <span class="badge badge-new" style="background: var(--color-primary); color: white; border-radius: 6px; padding: 4px 10px; font-size: 11px;">${sourceName}</span>
            <span class="article-date" style="font-size: 13px; color: var(--color-muted); display: flex; align-items: center; gap: 4px;">
              <i class='bx bx-calendar'></i> ${publishedDate}
            </span>
          </div>
          
          <h3 class="article-title" style="margin-bottom: 12px; line-height: 1.4;">
            <a href="${articleUrl}" target="_blank" style="text-decoration: none; color: inherit; font-size: 20px; font-weight: 700;">
                ${article.title || 'Untitled Article'}
            </a>
          </h3>
          
          <p class="article-excerpt" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; color: var(--color-muted); line-height: 1.6; margin-bottom: 0;">
            ${article.description || article.content || 'Click to read the full story...'}
          </p>

        </div>
      </div>
    `;

    // Make image clickable too
    const imgContainer = card.querySelector('div > div:first-child');
    imgContainer.style.cursor = 'pointer';
    imgContainer.onclick = () => window.open(articleUrl, '_blank');

    newsGrid.appendChild(card);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', fetchNews);
