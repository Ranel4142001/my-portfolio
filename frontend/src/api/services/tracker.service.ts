import api from '../axios';

export const PortfolioService = {
  /**
   * General tracking logic for site analytics
   */
  trackVisit: async (pagePath: string) => {
    return api.post('/page-view', {
      page_path: pagePath,
      user_agent: navigator.userAgent,
      referrer: document.referrer || 'direct',
    });
  },
};