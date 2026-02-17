// Contact message type
export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string; 
  preferredDate?: string;
  read?: boolean; 
}

// Visitor stats type
export interface VisitorStats {
  page_path: string;
  _count: {
    page_path: number;
  };
  last_visited?: string;
}

// Dashboard props
export interface DashboardViewProps {
  messages: ContactMessage[];
  stats: VisitorStats[];
  activeTab: 'messages' | 'analytics';
  setActiveTab: (tab: 'messages' | 'analytics') => void;
  error: string;
}