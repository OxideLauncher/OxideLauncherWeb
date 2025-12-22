import { Github, MessageSquare, Bug, Code, Heart, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { GitHubStats } from '@/components/GitHubStats';

const communityLinks = [
  {
    icon: Github,
    title: 'GitHub',
    description: 'Browse the source code, star the project, or fork it.',
    href: 'https://github.com/OxideLauncher/OxideLauncher',
    buttonText: 'View Repository',
  },
  {
    icon: Bug,
    title: 'Bug Reports',
    description: "Found something broken? Let us know and we'll fix it.",
    href: 'https://github.com/OxideLauncher/OxideLauncher/issues/new?labels=bug',
    buttonText: 'Report a Bug',
  },
  {
    icon: MessageSquare,
    title: 'Feature Requests',
    description: 'Have an idea for Oxide? We want to hear it.',
    href: 'https://github.com/OxideLauncher/OxideLauncher/issues/new?labels=enhancement',
    buttonText: 'Request Feature',
  },
  {
    icon: Users,
    title: 'Discussions',
    description: 'Ask questions, share tips, or just hang out.',
    href: 'https://github.com/OxideLauncher/OxideLauncher/discussions',
    buttonText: 'Join Discussions',
  },
];

const contributionSteps = [
  {
    step: 1,
    title: 'Fork the repository',
    description: 'Create your own copy of Oxide to work on.',
  },
  {
    step: 2,
    title: 'Make your changes',
    description: 'Fix a bug, add a feature, or improve documentation.',
  },
  {
    step: 3,
    title: 'Submit a pull request',
    description: "We'll review it and merge if everything looks good.",
  },
];

export function Community() {
  return (
    <div className="container-page py-12">
      {/* Header */}
      <div className="text-center mb-12 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Community</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Oxide is built by the community, for the community. 
          Here's how you can get involved or get help.
        </p>
      </div>

      {/* Community Links */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {communityLinks.map((link) => (
            <Card key={link.title} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <link.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {link.description}
                </CardDescription>
                <Button asChild variant="outline">
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {link.buttonText}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-16" />

      {/* GitHub Statistics */}
      <section className="mb-16">
        <GitHubStats />
      </section>

      <Separator className="mb-16" />

      {/* Contributing Section */}
      <section id="contributing" className="mb-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Contributing to Oxide</h2>
              <p className="text-muted-foreground">Help us make Oxide better</p>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground mb-8">
            <p>
              Oxide is open source and we welcome contributions of all kinds. 
              Whether you're fixing a typo, improving documentation, or adding a major feature, 
              your help is appreciated.
            </p>
            <p>
              The codebase uses Rust for the backend and React with TypeScript for the UI. 
              If you're familiar with either, you can jump right in. 
              If not, it's a great opportunity to learn!
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {contributionSteps.map((item) => (
              <div 
                key={item.step}
                className="flex gap-4 p-4 rounded-lg bg-card border border-border"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-semibold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Button asChild>
              <a 
                href="https://github.com/OxideLauncher/OxideLauncher" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" aria-hidden="true" />
                Get Started on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Separator className="mb-16" />

      {/* Future Community Channels */}
      <section className="max-w-3xl mx-auto">
        <Card className="border-dashed">
          <CardContent className="py-8 text-center">
            <Heart className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-xl font-semibold mb-2">More Coming Soon</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We're working on setting up additional community channels like Discord. 
              In the meantime, GitHub Discussions is the best place to connect with other users and developers.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Support Notice */}
      <section className="mt-16 max-w-3xl mx-auto">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-6">
            <h3 className="font-semibold mb-2">Need Help?</h3>
            <p className="text-sm text-muted-foreground">
              If you're running into issues with Oxide, the best places to get help are 
              GitHub Issues (for bugs) or GitHub Discussions (for questions). 
              Please search existing issues before creating a new one — someone might have 
              already found a solution!
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
