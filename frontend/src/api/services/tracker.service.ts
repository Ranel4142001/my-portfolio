// frontend/src/api/services/tracker.service.ts
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const PortfolioService = {
  trackVisit: async (path: string) => {
    const response = await fetch(`${BASE_URL}/api/tracker/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        page_path: path,          // Matches IsNotEmpty() in your DTO
        user_agent: navigator.userAgent, // Matches IsOptional() user_agent
        referrer: document.referrer || 'direct', // Matches IsOptional() referrer
      }),
    });
    return response.json();
  }
};