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
      <div className="flex items-center space-x-1 bg-card backdrop-blur-lg rounded-lg p-2 bevel-border star-bg">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-4 py-2 rounded font-bold text-sm transition-all duration-200",
              location.pathname === item.path
                ? "geocities-button glow-pink"
                : "text-muted-foreground hover:text-90s-pink hover-glow-pink"
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