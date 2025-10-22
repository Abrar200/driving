import { useEffect } from 'react';

/**
 * Security middleware component to add security headers and protections
 */
export const SecurityMiddleware = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Prevent clickjacking
    if (window.self !== window.top) {
      window.top!.location = window.self.location;
    }

    // Add security meta tags if not present
    const addMetaTag = (name: string, content: string) => {
      if (!document.querySelector(`meta[name="${name}"]`)) {
        const meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    // Content Security Policy
    addMetaTag('Content-Security-Policy', 
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
    );

    // Prevent MIME type sniffing
    addMetaTag('X-Content-Type-Options', 'nosniff');

    // Enable XSS protection
    addMetaTag('X-XSS-Protection', '1; mode=block');

    // Referrer policy
    addMetaTag('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Disable right-click context menu on production (optional)
    const handleContextMenu = (e: MouseEvent) => {
      if (import.meta.env.PROD) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return <>{children}</>;
};
