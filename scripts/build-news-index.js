/**
 * Build script to generate news/index.json from markdown articles
 * 
 * This script reads all .md files in public/news/articles/,
 * parses their frontmatter, and generates an index.json file
 * that both the website and launcher can fetch.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { glob } from 'glob';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTICLES_DIR = path.join(__dirname, '../public/news/articles');
const INDEX_FILE = path.join(__dirname, '../public/news/index.json');

async function buildNewsIndex() {
  console.log('📰 Building news index...');
  
  // Ensure directories exist
  const newsDir = path.dirname(INDEX_FILE);
  if (!fs.existsSync(newsDir)) {
    fs.mkdirSync(newsDir, { recursive: true });
  }
  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  }
  
  // Find all markdown files (excluding templates that start with _)
  const files = await glob('*.md', { cwd: ARTICLES_DIR });
  
  const articles = [];
  
  for (const file of files) {
    // Skip template files (files starting with _)
    if (file.startsWith('_')) {
      console.log(`📋 Skipping template: ${file}`);
      continue;
    }
    const filePath = path.join(ARTICLES_DIR, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    try {
      const { data } = matter(content);
      
      // Validate required fields
      if (!data.id || !data.title || !data.date || !data.category) {
        console.warn(`⚠️  Skipping ${file}: missing required frontmatter fields`);
        continue;
      }
      
      const slug = file.replace('.md', '');
      
      articles.push({
        id: data.id,
        slug,
        title: data.title,
        summary: data.summary || '',
        date: data.date,
        category: data.category,
        author: data.author || undefined,
        image: data.image || undefined,
      });
      
      console.log(`  ✓ ${data.title}`);
    } catch (error) {
      console.error(`❌ Error parsing ${file}:`, error.message);
    }
  }
  
  // Sort by date (newest first)
  articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  const index = {
    articles,
    lastUpdated: new Date().toISOString(),
  };
  
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
  
  console.log(`\n✅ Generated index.json with ${articles.length} articles`);
}

buildNewsIndex().catch(console.error);
