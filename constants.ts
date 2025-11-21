
import { CardProfile } from './types';
// @ts-ignore
import LOCAL_AVATAR from './assets/avatar.webp';

export const PROFILE_DATA: CardProfile = {
  handle: 'Kim Dabit',
  title: 'Software Developer',
  // Now using the local asset instead of an external Unsplash URL
  avatarUrl: LOCAL_AVATAR,
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
