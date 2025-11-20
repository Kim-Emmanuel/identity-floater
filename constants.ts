import { CardProfile } from './types';

export const PROFILE_DATA: CardProfile = {
  handle: 'Kim Dabit',
  title: 'Software Developer',
  // Using a professional, tech-focused avatar placeholder
  avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
  status: 'analyzing',
  links: [
    {
      id: '1',
      label: 'GitHub',
      value: 'github.com/kimdabit',
      href: 'https://github.com/Kim-Emmanuel',
      icon: 'github'
    },
    {
      id: '2',
      label: 'LinkedIn',
      value: 'in/kimdabit',
      href: 'https://linkedin.com/in/kimdabit',
      icon: 'linkedin'
    },
    {
      id: '3',
      label: 'WhatsApp',
      value: 'Chat with me',
      href: 'https://wa.me/254793926950?text=Hello%20I%20would%20like%20to%20contact%20you',
      icon: 'whatsapp'
    },
    {
      id: '4',
      label: 'Email',
      value: 'hello@kimdabit',
      href: 'mailto:kimemmanuel004@gmail.com',
      icon: 'mail'
    }
  ]
};

export const COLORS = {
  cyan: '#00ffff',
  amber: '#ffb300',
  darkBg: '#0d0d0d',
  glassBorder: 'rgba(255, 255, 255, 0.1)',
};