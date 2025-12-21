export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: 'minecraft' | 'launcher' | 'mods' | 'community';
  author?: string;
  image?: string;
  content?: string;
}

export interface NewsIndex {
  articles: NewsArticle[];
  lastUpdated: string;
}

const NEWS_INDEX_URL = '/news/index.json';

export async function fetchNewsIndex(): Promise<NewsIndex> {
  try {
    const response = await fetch(NEWS_INDEX_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching news index:', error);
    // Return empty index on error
    return {
      articles: [],
      lastUpdated: new Date().toISOString(),
    };
  }
}

export async function fetchArticleContent(slug: string): Promise<string | null> {
  try {
    const response = await fetch(`/news/articles/${slug}.md`);
    if (!response.ok) {
      return null;
    }
    const text = await response.text();
    // Remove frontmatter (content between --- markers)
    const frontmatterEnd = text.indexOf('---', 3);
    if (frontmatterEnd !== -1) {
      return text.slice(frontmatterEnd + 3).trim();
    }
    return text;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export const CATEGORY_COLORS: Record<NewsArticle['category'], string> = {
  minecraft: 'bg-green-500/10 text-green-500 border-green-500/20',
  launcher: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  mods: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
  community: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
};

export const CATEGORY_LABELS: Record<NewsArticle['category'], string> = {
  minecraft: 'Minecraft',
  launcher: 'Launcher',
  mods: 'Mods',
  community: 'Community',
};
