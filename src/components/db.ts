import {
  Github,
  Linkedin,
  Twitter,
  Brain,
  Zap,
  Shield,
  BarChart3,
  Clock,
  Users,
  Rocket,
  Settings,
  TrendingUp,
} from 'lucide-react';

// header.tsx
export const navigation = [
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

// footer.tsx
export const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'API Documentation', href: '#' },
    { name: 'Integrations', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'News', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'Contact Support', href: '#' },
    { name: 'Status Page', href: '#' },
    { name: 'Community', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Security', href: '#' },
  ],
};

export const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'GitHub', href: '#', icon: Github },
];

// faq-section.tsx
export const faqs = [
  {
    question: 'How quickly can I get started with InnovateTech?',
    answer:
      'You can get started immediately with our free trial. The onboarding process takes less than 5 minutes, and our AI-guided setup will have you running automated workflows within the first hour.',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'We offer comprehensive support including 24/7 chat support, dedicated account managers for enterprise clients, extensive documentation, video tutorials, and a community forum. Our response times are industry-leading.',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Security is our top priority. We use bank-level encryption, maintain SOC 2 Type II compliance, and store data in secure, geographically distributed data centers. Your data is never shared with third parties.',
  },
  {
    question: 'Can I integrate with my existing tools?',
    answer:
      'Yes! We offer 500+ pre-built integrations with popular business tools like Slack, Salesforce, Google Workspace, Microsoft 365, and more. We also provide a robust API for custom integrations.',
  },
  {
    question: 'What happens if I need to cancel?',
    answer:
      'You can cancel anytime with no penalties. We offer a 30-day money-back guarantee, and you can export all your data easily. We also provide migration assistance if needed.',
  },
  {
    question: 'Do you offer custom enterprise solutions?',
    answer:
      'Absolutely! We work closely with enterprise clients to develop custom solutions that fit their specific needs, including on-premise deployments, custom AI models, and dedicated infrastructure.',
  },
];

// pricing-section.tsx
export const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams getting started with AI automation.',
    features: [
      'Up to 5 team members',
      'Basic AI analytics',
      'Standard integrations',
      'Email support',
      '10GB storage',
      'Basic reporting',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 99,
    description:
      'Advanced features for growing businesses that need more power.',
    features: [
      'Up to 25 team members',
      'Advanced AI analytics',
      'Premium integrations',
      'Priority support',
      '100GB storage',
      'Advanced reporting',
      'Custom workflows',
      'API access',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 299,
    description:
      'Full-scale solution for large organizations with custom needs.',
    features: [
      'Unlimited team members',
      'Enterprise AI suite',
      'All integrations',
      'Dedicated support',
      'Unlimited storage',
      'Custom reporting',
      'Advanced workflows',
      'Full API access',
      'Custom training',
      'SLA guarantee',
    ],
    popular: false,
  },
];

// testimonials-section.tsx

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechCorp',
    avatar:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    content:
      'InnovateTech transformed our business operations completely. We saw a 300% increase in efficiency within just 3 months. The AI insights are incredibly accurate and actionable.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Solutions',
    avatar:
      'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
    content:
      'The integration was seamless and the support team is outstanding. Our development workflow is now 10x faster, and our team loves the intuitive interface.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP of Operations',
    company: 'Global Dynamics',
    avatar:
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    content:
      'ROI was evident from day one. The automated workflows saved us countless hours and the predictive analytics helped us make better strategic decisions.',
    rating: 5,
  },
];

// features-section.tsx
export const features = [
  {
    icon: Brain,
    title: 'Advanced AI Analytics',
    description:
      'Leverage machine learning algorithms to gain deep insights from your data and make data-driven decisions.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Performance',
    description:
      'Experience blazing-fast processing speeds with our optimized infrastructure and cutting-edge technology.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level security with end-to-end encryption, compliance certifications, and advanced threat protection.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Insights',
    description:
      'Monitor your business metrics in real-time with customizable dashboards and intelligent alerts.',
  },
  {
    icon: Clock,
    title: 'Automated Workflows',
    description:
      'Streamline your operations with intelligent automation that adapts to your business processes.',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description:
      'Enhance teamwork with integrated communication tools and shared workspaces designed for productivity.',
  },
  {
    icon: Rocket,
    title: 'Scalable Infrastructure',
    description:
      'Scale effortlessly from startup to enterprise with our cloud-native architecture and flexible pricing.',
  },
  {
    icon: Settings,
    title: 'Easy Integration',
    description:
      'Connect with your existing tools through our comprehensive API and pre-built integrations.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Optimization',
    description:
      'Identify opportunities for growth with predictive analytics and actionable business intelligence.',
  },
];

// hero-section.tsx
export const stats = [
  { label: 'Companies Trust Us', value: '10,000+' },
  { label: 'Efficiency Increase', value: '300%' },
  { label: 'Customer Satisfaction', value: '99.9%' },
];
