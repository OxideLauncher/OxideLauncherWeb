import { useEffect, useState } from 'react';
import { Star, GitFork } from 'lucide-react';

interface RepoStats {
  stars: number;
  forks: number;
}

export function GitHubBadge() {
  const [stats, setStats] = useState<RepoStats | null>(null);

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
        });
      })
      .catch(() => {
        // Silently fail - badge is optional
      });
  }, []);

  if (!stats) return null;

  return (
    <a
      href="https://github.com/OxideLauncher/OxideLauncher"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card border border-border hover:border-primary/50 transition-colors"
      aria-label="View on GitHub"
    >
      <div className="flex items-center gap-1">
        <Star className="h-4 w-4 text-yellow-500" aria-hidden="true" />
        <span className="text-sm font-medium">{stats.stars.toLocaleString()}</span>
      </div>
      <div className="h-4 w-px bg-border" />
      <div className="flex items-center gap-1">
        <GitFork className="h-4 w-4 text-primary" aria-hidden="true" />
        <span className="text-sm font-medium">{stats.forks.toLocaleString()}</span>
      </div>
    </a>
  );
}
