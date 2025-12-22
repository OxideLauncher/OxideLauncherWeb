import { useEffect, useState } from 'react';
import { Github, Star, GitFork, AlertCircle, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface RepoStats {
  stars: number;
  forks: number;
  openIssues: number;
  watchers: number;
}

export function GitHubStats() {
  const [stats, setStats] = useState<RepoStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.github.com/repos/OxideLauncher/OxideLauncher')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch');
        return res.json();
      })
      .then((data) => {
        setStats({
          stars: data.stargazers_count,
          forks: data.forks_count,
          openIssues: data.open_issues_count,
          watchers: data.subscribers_count,
        });
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Github className="h-5 w-5 text-primary" aria-hidden="true" />
          <CardTitle>Repository Statistics</CardTitle>
        </div>
        <CardDescription>
          Live stats from our GitHub repository
        </CardDescription>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="h-8 w-16 bg-muted rounded mx-auto mb-2" />
                <div className="h-4 w-12 bg-muted rounded mx-auto" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="h-4 w-4 text-yellow-500" aria-hidden="true" />
                <span className="text-2xl font-bold">{stats?.stars.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">Stars</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <GitFork className="h-4 w-4 text-primary" aria-hidden="true" />
                <span className="text-2xl font-bold">{stats?.forks.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">Forks</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <AlertCircle className="h-4 w-4 text-orange-500" aria-hidden="true" />
                <span className="text-2xl font-bold">{stats?.openIssues.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">Open Issues</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="h-4 w-4 text-green-500" aria-hidden="true" />
                <span className="text-2xl font-bold">{stats?.watchers.toLocaleString()}</span>
              </div>
              <p className="text-sm text-muted-foreground">Watchers</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
