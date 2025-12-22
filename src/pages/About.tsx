import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Box, 
  Puzzle, 
  Check, 
  X,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const features = [
  {
    icon: Zap,
    title: 'Performance-First Design',
    description: 'Oxide is built with Rust, which means native-level performance without the overhead of Electron or similar frameworks. The launcher starts in milliseconds and stays out of your way while you play.',
  },
  {
    icon: Box,
    title: 'Isolated Instances',
    description: "Each Minecraft installation lives in its own space. Different mod setups, different versions, different everything — without any cross-contamination. Perfect for testing or running multiple modpacks.",
  },
  {
    icon: Puzzle,
    title: 'Universal Mod Sources',
    description: "Download mods from both CurseForge and Modrinth in one place. No need to switch between apps or manually hunt down files. Search, click, play.",
  },
  {
    icon: Shield,
    title: 'Open and Transparent',
    description: 'GPL-3.0 licensed. Every line of code is public. No hidden telemetry, no data collection, no accounts required. Your launcher, your rules.',
  },
];

const comparisonFeatures = [
  { feature: 'Built with Rust', oxide: true, prism: false, modrinth: true, curseforge: false },
  { feature: 'Modern React UI', oxide: true, prism: false, modrinth: true, curseforge: false },
  { feature: 'Native performance', oxide: true, prism: true, modrinth: true, curseforge: false },
  { feature: 'Multi-instance support', oxide: true, prism: true, modrinth: true, curseforge: true },
  { feature: 'CurseForge integration', oxide: true, prism: true, modrinth: false, curseforge: true },
  { feature: 'Modrinth integration', oxide: true, prism: true, modrinth: true, curseforge: false },
  { feature: 'Open source', oxide: true, prism: true, modrinth: true, curseforge: false },
  { feature: 'Cross-platform support', oxide: true, prism: true, modrinth: true, curseforge: true },
];

function ComparisonIcon({ value }: { value: boolean }) {
  return value ? (
    <Check className="h-5 w-5 text-green-500" aria-label="Supported" />
  ) : (
    <X className="h-5 w-5 text-muted-foreground/50" aria-label="Not supported" />
  );
}

export function About() {
  return (
    <div className="container-page py-12">
      {/* Header */}
      <div className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">About Oxide Launcher</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A fresh take on the Minecraft launcher, built by players who wanted something better.
        </p>
      </div>

      {/* Mission Statement */}
      <section className="max-w-3xl mx-auto mb-20">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="py-8 px-6 md:px-8">
            <h2 className="text-2xl font-bold mb-4">Our Philosophy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Oxide started because we got tired of launchers that were either outdated, 
                resource-heavy, or locked into a single mod ecosystem. We wanted something 
                that combined the reliability of established tools with modern tech and design.
              </p>
              <p>
                The result is a launcher that's fast, looks good, and doesn't try to be more 
                than it needs to be. It downloads your game, manages your mods, and gets out 
                of the way. No social features, no marketplace, no unnecessary complexity.
              </p>
              <p>
                Everything is open source because we believe that's how software should be. 
                You can see exactly what the launcher does, contribute improvements, or fork 
                it to make something entirely new.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Grid */}
      <section id="features" className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">What Makes Oxide Different</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="mb-20" />

      {/* Comparison Table */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">How We Compare</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          We're not here to trash other launchers — they're great projects. 
          This is just an honest look at what each one offers.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl mx-auto" role="table">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-4 text-left font-semibold" scope="col">Feature</th>
                <th className="py-4 px-4 text-center font-semibold" scope="col">
                  <span className="text-primary">Oxide</span>
                </th>
                <th className="py-4 px-4 text-center font-semibold" scope="col">Prism</th>
                <th className="py-4 px-4 text-center font-semibold" scope="col">Modrinth</th>
                <th className="py-4 px-4 text-center font-semibold" scope="col">CurseForge</th>
              </tr>
            </thead>
            <tbody>
              {comparisonFeatures.map((row, index) => (
                <tr 
                  key={row.feature} 
                  className={index % 2 === 0 ? 'bg-muted/30' : ''}
                >
                  <td className="py-3 px-4 text-sm">{row.feature}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <ComparisonIcon value={row.oxide} />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <ComparisonIcon value={row.prism} />
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <ComparisonIcon value={row.modrinth} />
                    </div>
                  <td className="py-3 px-4">
                    <div className="flex justify-center">
                      <ComparisonIcon value={row.curseforge} />
                    </div>
                  </td>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <p className="text-center text-sm text-muted-foreground mt-6">
          Note: Features may change as all projects continue development.
        </p>
      </section>

      {/* Why Not Just Use X? */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-2">Why not just use Prism Launcher?</h3>
            <p className="text-muted-foreground">
              Prism is excellent and has been around for years. If you're happy with it, stick with it! 
              Oxide is for people who want a more modern UI or prefer Rust-based tooling. 
              We're not trying to replace Prism — we're offering an alternative.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Why not use the Modrinth App?</h3>
            <p className="text-muted-foreground">
              The Modrinth App is great if you only use Modrinth mods. 
              Oxide supports both CurseForge and Modrinth, which means you're not locked 
              into a single ecosystem. If a mod is only on CurseForge, you're covered.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Is Oxide affiliated with Prism or Modrinth?</h3>
            <p className="text-muted-foreground">
              Nope. Oxide is an independent project. We're not forked from or officially 
              connected to any other launcher. We just think they're cool and learned from 
              what they got right.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Is Oxide stable enough to use?</h3>
            <p className="text-muted-foreground">
              We're actively developing Oxide and use it ourselves. That said, it's newer 
              than established launchers, so expect some rough edges. We'd love for you to 
              try it and report any issues you find.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2">Is Oxide affiliated with Mojang or Microsoft?</h3>
            <p className="text-muted-foreground">
              No. Oxide Launcher is an independent, community-driven project. We are not 
              affiliated with, endorsed by, or associated with Mojang Studios or Microsoft Corporation. 
              Minecraft is a trademark of Mojang Studios.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to try it?</h2>
        <p className="text-muted-foreground mb-6">
          Download Oxide and see if it clicks for you. No commitments, no sign-ups.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/download">
              Download Oxide
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a 
              href="https://github.com/OxideLauncher/OxideLauncher" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
