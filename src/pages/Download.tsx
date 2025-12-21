import { useState } from 'react';
import { ExternalLink, Monitor, Apple, Terminal, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Platform = 'windows' | 'mac' | 'linux';

interface PlatformInfo {
  id: Platform;
  name: string;
  icon: typeof Monitor;
  available: boolean;
  fileType: string;
  description: string;
}

const platforms: PlatformInfo[] = [
  {
    id: 'windows',
    name: 'Windows',
    icon: Monitor,
    available: true,
    fileType: '.exe / .msi',
    description: 'Windows 10/11 (64-bit)',
  },
  {
    id: 'mac',
    name: 'macOS',
    icon: Apple,
    available: false,
    fileType: '.dmg',
    description: 'macOS 11+ (Intel & Apple Silicon)',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: Terminal,
    available: false,
    fileType: '.AppImage / .deb',
    description: 'Most distributions (64-bit)',
  },
];

// This will be dynamically fetched from GitHub releases in production
const GITHUB_RELEASES_URL = 'https://github.com/OxideLauncher/OxideLauncher/releases/latest';

export function Download() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('windows');

  const handleDownload = (platform: Platform) => {
    const platformInfo = platforms.find(p => p.id === platform);
    if (platformInfo?.available) {
      // Redirect to GitHub releases for now
      // In future, this could dynamically link to specific assets
      window.open(GITHUB_RELEASES_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="container-page py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Download Oxide Launcher</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get started with Oxide in just a few clicks. Select your platform below.
        </p>
      </div>

      {/* Platform Selection */}
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        {platforms.map((platform) => {
          const isSelected = selectedPlatform === platform.id;
          const Icon = platform.icon;
          
          return (
            <Card
              key={platform.id}
              className={cn(
                'relative cursor-pointer transition-all',
                platform.available 
                  ? 'hover:border-primary/50' 
                  : 'opacity-60 cursor-not-allowed',
                isSelected && platform.available && 'border-primary ring-2 ring-primary/20'
              )}
              onClick={() => platform.available && setSelectedPlatform(platform.id)}
              role="button"
              tabIndex={platform.available ? 0 : -1}
              aria-pressed={isSelected}
              aria-disabled={!platform.available}
              onKeyDown={(e) => {
                if (platform.available && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  setSelectedPlatform(platform.id);
                }
              }}
            >
              {!platform.available && (
                <Badge 
                  variant="secondary" 
                  className="absolute top-3 right-3 text-xs"
                >
                  Coming Soon
                </Badge>
              )}
              
              {isSelected && platform.available && (
                <div className="absolute top-3 right-3">
                  <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
              )}
              
              <CardHeader className="text-center pb-2">
                <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="mb-2">{platform.description}</CardDescription>
                <p className="text-sm text-muted-foreground">{platform.fileType}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Download Button */}
      <div className="text-center mb-12">
        <Button 
          size="xl" 
          onClick={() => handleDownload(selectedPlatform)}
          disabled={!platforms.find(p => p.id === selectedPlatform)?.available}
          className="min-w-[200px]"
        >
          Download for {platforms.find(p => p.id === selectedPlatform)?.name}
          <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          or{' '}
          <a 
            href={GITHUB_RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            view all releases on GitHub
          </a>
        </p>
      </div>

      {/* Linux/Mac Notice */}
      <Card className="max-w-2xl mx-auto border-yellow-500/20 bg-yellow-500/5">
        <CardContent className="flex gap-4 py-6">
          <AlertCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="font-semibold mb-1">Linux & macOS Support</h3>
            <p className="text-sm text-muted-foreground">
              We're working on verifying Linux and macOS builds. Development is currently focused on Windows, 
              but cross-platform support is a priority. If you'd like to help test or contribute, 
              check out our{' '}
              <a 
                href="https://github.com/OxideLauncher/OxideLauncher"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub repository
              </a>.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* System Requirements */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">System Requirements</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Minimum</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Windows 10 (64-bit) or later</p>
              <p>• 4 GB RAM</p>
              <p>• 500 MB disk space (plus Minecraft)</p>
              <p>• Internet connection for downloads</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recommended</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Windows 11 (64-bit)</p>
              <p>• 8 GB RAM</p>
              <p>• SSD for faster instance loading</p>
              <p>• Broadband internet connection</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
