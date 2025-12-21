import { Link } from 'react-router-dom';
import { 
  Zap, 
  Box, 
  Download as DownloadIcon, 
  Shield, 
  Sparkles, 
  FolderOpen,
  Puzzle,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: Zap,
    title: 'Blazing Fast',
    description: 'Built with Rust for native performance. Downloads are parallelized and memory usage stays low.',
  },
  {
    icon: Box,
    title: 'Multi-Instance',
    description: 'Run multiple Minecraft installations side by side, each with their own mods and settings.',
  },
  {
    icon: Puzzle,
    title: 'All Your Mods',
    description: 'Search and install mods from CurseForge and Modrinth. We support all the popular mod platforms.',
  },
  {
    icon: Sparkles,
    title: 'Modern Interface',
    description: 'A clean, intuitive design that gets out of your way. Dark and light themes included.',
  },
  {
    icon: Shield,
    title: 'Open Source',
    description: 'GPL-3.0 licensed and transparent. Review our code, contribute, or fork it yourself.',
  },
  {
    icon: FolderOpen,
    title: 'Your Data, Your Control',
    description: 'Everything is stored locally. No telemetry, no accounts required, no strings attached.',
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero">
        <div className="container-page py-20 md:py-32">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto animate-fade-in">
            {/* 
              PLACEHOLDER IMAGE: Hero banner/logo
              Suggested: The Oxide Launcher banner (oxidebannershort.svg) displayed prominently,
              or a stylized Minecraft-themed background with subtle gradient overlay
            */}
            <img 
              src="/oxidebannershort.svg" 
              alt="Oxide Launcher" 
              className="h-16 md:h-20 mb-8"
            />
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              A Minecraft launcher that just{' '}
              <span className="text-primary">works</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Oxide is a modern, open-source launcher built with Rust. Fast downloads, 
              easy mod management, and a clean interface. No bloat, no tracking, just Minecraft.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="xl">
                <Link to="/download">
                  <DownloadIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                  Download
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/about">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* 
          PLACEHOLDER IMAGE: Screenshot section
          Suggested: A screenshot or mockup of the launcher UI showing the instances view,
          preferably in dark mode to match the default theme. Could be a browser mockup
          or just a clean screenshot with rounded corners and subtle shadow.
        */}
        <div className="container-page pb-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="rounded-xl border border-border bg-card p-2 shadow-2xl">
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-center px-4">
                  [PLACEHOLDER: Screenshot of Oxide Launcher - 
                  Show the main instances view with a few Minecraft instances, 
                  demonstrating the modern UI design]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container-page">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Built for players who want to spend more time playing and less time wrestling with their launcher.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} className="border-border/50 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Oxide Section */}
      <section className="py-20">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why choose Oxide?</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  There are plenty of Minecraft launchers out there. Prism Launcher, Modrinth App, 
                  MultiMC — they're all solid choices. So why build another one?
                </p>
                <p>
                  We wanted something that combined the best parts: Prism's feature set, 
                  a modern tech stack like Modrinth App, and a focus on speed and simplicity. 
                  Oxide uses Rust and Tauri for a native feel without the resource overhead.
                </p>
                <p>
                  The result? A launcher that starts fast, downloads fast, and doesn't hog your RAM 
                  while Minecraft is running. It's open source, actively developed, and built by 
                  people who actually play Minecraft.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link to="/about">
                    Read more about Oxide
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* 
              PLACEHOLDER IMAGE: Side illustration
              Suggested: An illustration showing the comparison between launchers,
              or a stylized graphic of the Oxide logo with some Minecraft elements.
              Could also be a second screenshot showing mod browser or settings.
            */}
            <div className="relative">
              <div className="rounded-xl border border-border bg-card p-8 aspect-square flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  [PLACEHOLDER: Illustration or second screenshot - 
                  Could show mod browser, settings page, or a stylized comparison graphic]
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-border">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Download Oxide Launcher and set up your first instance in minutes. It's free, open source, and yours to keep.
          </p>
          <Button asChild size="xl">
            <Link to="/download">
              <DownloadIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              Download Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
