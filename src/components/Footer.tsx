import { Link } from 'react-router-dom';
import { Github, Heart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const footerLinks = {
  product: [
    { name: 'Download', href: '/download' },
    { name: 'Features', href: '/about#features' },
    { name: 'News', href: '/news' },
  ],
  community: [
    { name: 'GitHub', href: 'https://github.com/OxideLauncher/OxideLauncher', external: true },
    { name: 'Contributing', href: '/community#contributing' },
    { name: 'Bug Reports', href: 'https://github.com/OxideLauncher/OxideLauncher/issues', external: true },
  ],
  legal: [
    { name: 'License (GPL-3.0)', href: 'https://github.com/OxideLauncher/OxideLauncher/blob/main/LICENSE', external: true },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50" role="contentinfo">
      <div className="container-page py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/OxideRound.svg" 
                alt="" 
                className="h-8 w-8" 
                aria-hidden="true"
              />
              <span className="font-semibold text-lg">Oxide Launcher</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A modern, open-source Minecraft launcher built with Rust.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground/70 text-center mb-6">
          Oxide Launcher is not affiliated with, endorsed by, or associated with Mojang Studios or Microsoft Corporation. 
          Minecraft is a trademark of Mojang Studios.
        </p>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Oxide Launcher Contributors. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/OxideLauncher/OxideLauncher"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Visit our GitHub repository"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
            </a>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" aria-label="love" /> and Rust
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
