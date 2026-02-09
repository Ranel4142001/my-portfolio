/**
 * Project Interface
 * Best Practice: Keep your schema in the data file to act as a 
 * single source of truth for both your UI and your content.
 */
export interface Project {
  title: string;
  description: string;
  technologies: string[]; // Synchronized from 'tags' to match your UI mapping
  github?: string;        // Added for your Lucide GitHub icons
  live?: string;          // Added for your External Link icons
  featured: boolean;      // Required for your Projects.tsx filter logic
  direction: 'left' | 'right' | 'bottom'; // Maintained from your previous structure
}

export const projectsData: Project[] = [
  {
    title: 'E-Commerce API Platform',
    description: 'A scalable RESTful API powering an e-commerce platform with user authentication, product management, order processing, and payment integration.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'Docker'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    direction: 'left'
  },
  {
    title: 'Real-time Chat System',
    description: 'WebSocket-based chat application supporting private messaging, group chats, and file sharing with message encryption.',
    technologies: ['Python', 'FastAPI', 'WebSocket', 'MongoDB', 'RabbitMQ'],
    github: 'https://github.com',
    featured: true,
    direction: 'right'
  },
  {
    title: 'Authentication Service',
    description: 'Centralized authentication microservice implementing OAuth 2.0, JWT tokens, and multi-factor authentication.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'OAuth2'],
    github: 'https://github.com',
    featured: true,
    direction: 'bottom'
  },
  {
    title: 'Task Queue Manager',
    description: 'Distributed task queue system for handling background jobs with priority scheduling and retry mechanisms.',
    technologies: ['Python', 'Celery', 'Redis', 'Docker'],
    github: 'https://github.com',
    featured: false,
    direction: 'left'
  },
  {
    title: 'Log Analytics Pipeline',
    description: 'Real-time log aggregation and analysis system processing millions of events per day with anomaly detection.',
    technologies: ['Node.js', 'Elasticsearch', 'Kafka', 'Kibana'],
    github: 'https://github.com',
    featured: false,
    direction: 'right'
  },
  {
    title: 'API Gateway',
    description: 'Custom API gateway handling rate limiting, request validation, and load balancing for microservices.',
    technologies: ['Go', 'Redis', 'Nginx', 'Docker'],
    github: 'https://github.com',
    featured: false,
    direction: 'bottom'
  }
];