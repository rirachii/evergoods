import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/60">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="font-extrabold tracking-tight text-xl md:text-2xl">
          <span className="text-foreground">evergoods</span>
          <span className="text-primary">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors hover:text-foreground/80 ${isActive ? "text-foreground" : "text-foreground/60"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Link to="/contact">
            <Button className="rounded-full px-5">Contact</Button>
          </Link>
        </div>
        <div className="md:hidden">
          <Link to="/contact" className="text-sm text-primary">Contact</Link>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
