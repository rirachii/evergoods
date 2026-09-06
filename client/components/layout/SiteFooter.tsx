import { Link } from "react-router-dom";
import {
  DODOSE_APP_STORE_URL,
  INTENT_APP_STORE_URL,
  OOMPF_URL,
  UMAMI_WORLD_URL,
} from "@/lib/apps";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background/80">
      <div className="container mx-auto grid gap-8 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <div className="font-extrabold text-lg">Evergoods Holdings LLC</div>
          <p className="text-sm text-foreground/70">
            We design, build, and scale AI applications for ambitious teams.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-foreground">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-foreground">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Apps</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <a
                href={DODOSE_APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                DoDose on the App Store
              </a>
            </li>
            <li>
              <a
                href={INTENT_APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Intent on the App Store
              </a>
            </li>
            <li>
              <a
                href={OOMPF_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Oompf
              </a>
            </li>
            <li>
              <a
                href={UMAMI_WORLD_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-foreground"
              >
                Foodex · Umami World
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Legal</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li>
              <Link to="/intent" className="hover:text-foreground">
                Intent support
              </Link>
            </li>
            <li>
              <Link to="/intent/privacy" className="hover:text-foreground">
                Intent privacy
              </Link>
            </li>
            <li>
              <Link to="/intent/terms" className="hover:text-foreground">
                Intent terms
              </Link>
            </li>
            <li>
              <Link to="/dex/support" className="hover:text-foreground">
                Dex Apps support
              </Link>
            </li>
            <li>
              <Link to="/dex/privacy" className="hover:text-foreground">
                Dex Apps privacy
              </Link>
            </li>
            <li>© {new Date().getFullYear()} Evergoods Holdings LLC</li>
            <li>All rights reserved</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
