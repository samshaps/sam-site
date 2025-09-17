import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Me" },
    { path: "/highlights", label: "Highlights" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex items-center space-x-1 synthwave-border rounded-lg p-2 scanlines">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-4 py-2 rounded font-bold text-sm transition-all duration-300 font-orbitron",
              location.pathname === item.path
                ? "retro-gaming-button glow-cyan"
                : "text-muted-foreground hover:text-neon-cyan hover-glow-cyan"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;