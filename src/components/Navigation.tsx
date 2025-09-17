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
      <div className="flex items-center space-x-1 bg-card/80 backdrop-blur-lg rounded-xl p-2 neon-border">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300",
              "hover:bg-primary/10 hover:text-primary",
              location.pathname === item.path
                ? "bg-primary text-primary-foreground glow-cyan"
                : "text-muted-foreground hover-glow-cyan"
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