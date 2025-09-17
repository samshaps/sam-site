import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/about", label: "ABOUT" },
    { path: "/highlights", label: "WORKS" }, 
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="nav-modern px-6 py-3">
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;