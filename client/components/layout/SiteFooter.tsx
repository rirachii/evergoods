import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container mx-auto py-12 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-extrabold text-lg">Evergoods Holdings LLC</div>
          <p className="text-sm text-foreground/70">
            We design, build, and scale AI applications for ambitious teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>© {new Date().getFullYear()} Evergoods Holdings LLC</li>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
