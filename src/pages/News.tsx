import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  fetchNewsIndex, 
  NewsArticle, 
  CATEGORY_COLORS, 
  CATEGORY_LABELS 
} from '@/lib/news';
import { formatDate } from '@/lib/utils';

export function News() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const index = await fetchNewsIndex();
      setArticles(index.articles);
    } catch {
      setError('Failed to load news. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <div className="container-page py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 animate-fade-in">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <Newspaper className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">News</h1>
            <p className="text-muted-foreground">Updates, announcements, and community highlights</p>
          </div>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={loadNews} 
          disabled={loading}
          aria-label="Refresh news"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} aria-hidden="true" />
          Refresh
        </Button>
      </div>

      {/* Error State */}
      {error && (
        <Card className="border-destructive/50 bg-destructive/5 mb-8">
          <CardContent className="py-6">
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="grid gap-4" aria-busy="true" aria-label="Loading news articles">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <div className="skeleton h-6 w-3/4 rounded" />
                <div className="skeleton h-4 w-24 rounded mt-2" />
              </CardHeader>
              <CardContent>
                <div className="skeleton h-4 w-full rounded mb-2" />
                <div className="skeleton h-4 w-4/5 rounded" />
              </CardContent>
            </Card>
          ))}
        </div>
      ) : articles.length === 0 ? (
        /* Empty State */
        <Card className="border-dashed">
          <CardContent className="py-16 text-center">
            <Newspaper className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">No news yet</h2>
            <p className="text-muted-foreground">
              Check back later for updates and announcements.
            </p>
          </CardContent>
        </Card>
      ) : (
        /* Article List */
        <div className="grid gap-4" role="feed" aria-label="News articles">
          {articles.map((article) => (
            <article key={article.id}>
              <Card className="hover:border-primary/50 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1 flex-1">
                      <Link 
                        to={`/news/${article.slug}`}
                        className="block group"
                      >
                        <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                          {article.title}
                        </CardTitle>
                      </Link>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                        <time dateTime={article.date}>{formatDate(article.date)}</time>
                        {article.author && (
                          <>
                            <span aria-hidden="true">•</span>
                            <span>{article.author}</span>
                          </>
                        )}
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={CATEGORY_COLORS[article.category]}
                    >
                      {CATEGORY_LABELS[article.category]}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-3">
                    {article.summary}
                  </CardDescription>
                  <Link 
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      )}

      {/* Info Notice */}
      <Card className="mt-8 border-dashed border-muted-foreground/30">
        <CardContent className="py-6 text-center">
          <p className="text-muted-foreground text-sm">
            📰 News is synced with the Oxide Launcher app. 
            Articles you see here will also appear in the launcher.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
