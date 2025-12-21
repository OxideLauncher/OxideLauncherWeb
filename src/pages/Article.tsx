import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  fetchNewsIndex, 
  fetchArticleContent, 
  NewsArticle, 
  CATEGORY_COLORS, 
  CATEGORY_LABELS 
} from '@/lib/news';
import { formatDate } from '@/lib/utils';

export function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [content, setContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const index = await fetchNewsIndex();
        const foundArticle = index.articles.find(a => a.slug === slug);
        
        if (!foundArticle) {
          setError('Article not found');
          return;
        }
        
        setArticle(foundArticle);
        
        const articleContent = await fetchArticleContent(slug);
        if (articleContent) {
          setContent(articleContent);
        }
      } catch {
        setError('Failed to load article');
      } finally {
        setLoading(false);
      }
    };
    
    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="container-page py-12 max-w-3xl" aria-busy="true">
        <div className="skeleton h-8 w-32 rounded mb-8" />
        <div className="skeleton h-10 w-3/4 rounded mb-4" />
        <div className="skeleton h-4 w-48 rounded mb-8" />
        <div className="space-y-4">
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-3/4 rounded" />
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="container-page py-12">
        <Card className="max-w-lg mx-auto">
          <CardContent className="py-12 text-center">
            <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-6">
              {error || "The article you're looking for doesn't exist."}
            </p>
            <Button asChild>
              <Link to="/news">
                <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
                Back to News
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <article className="container-page py-12 max-w-3xl">
      {/* Back Link */}
      <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
        <Link to="/news">
          <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
          Back to News
        </Link>
      </Button>

      {/* Article Header */}
      <header className="mb-8 animate-fade-in">
        <Badge 
          variant="outline" 
          className={`${CATEGORY_COLORS[article.category]} mb-4`}
        >
          {CATEGORY_LABELS[article.category]}
        </Badge>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
          {article.author && (
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden="true" />
              <span>{article.author}</span>
            </div>
          )}
        </div>
      </header>

      {/* Article Image */}
      {article.image && (
        <div className="mb-8 rounded-lg overflow-hidden border border-border">
          <img 
            src={article.image} 
            alt="" 
            className="w-full h-auto"
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose">
        {content ? (
          <ReactMarkdown>{content}</ReactMarkdown>
        ) : (
          <p className="text-muted-foreground">{article.summary}</p>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-border">
        <Button asChild variant="outline">
          <Link to="/news">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            Back to all news
          </Link>
        </Button>
      </footer>
    </article>
  );
}
