/**
 * Security utility functions for input validation and sanitization
 */

// Sanitize string input to prevent XSS attacks
export const sanitizeInput = (input: string): string => {
  if (!input) return '';
  
  return input
    .replace(/[<>]/g, '') // Remove < and > characters
    .trim()
    .slice(0, 1000); // Limit length to prevent DoS
};

// Validate email format
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

// Validate phone number (Australian format)
export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^(\+?61|0)[2-478](?:[ -]?[0-9]){8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Sanitize URL to prevent javascript: and data: protocols
export const sanitizeUrl = (url: string): string => {
  if (!url) return '';
  
  const trimmed = url.trim().toLowerCase();
  
  // Block dangerous protocols
  if (
    trimmed.startsWith('javascript:') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('vbscript:')
  ) {
    return '';
  }
  
  return url;
};

// Rate limiting helper (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

export const checkRateLimit = (
  identifier: string,
  maxAttempts: number = 5,
  windowMs: number = 60000
): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxAttempts) {
    return false;
  }
  
  record.count++;
  return true;
};

// Clean up old rate limit records periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 300000); // Clean up every 5 minutes
