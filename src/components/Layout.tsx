import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen relative bg-background">
      {/* Logo */}
      <div className="fixed top-6 left-6 z-50">
        <div className="logo-container">
          S.S
        </div>
      </div>
      
      <Navigation />
      
      <main className="container mx-auto px-6 pt-24 pb-16 max-w-6xl relative z-10">
        {children}
      </main>
      
      <footer className="fixed bottom-6 left-6 z-50">
        <a
          href="https://linkedin.com/in/samshap"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 bg-muted hover:bg-accent border border-border rounded-full transition-all duration-200 hover:scale-105"
          aria-label="LinkedIn Profile"
        >
          <svg
            className="w-5 h-5 text-muted-foreground"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </footer>
    </div>
  );
};

export default Layout;