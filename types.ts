export interface SocialLink {
  id: string;
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'globe' | 'github' | 'linkedin' | 'whatsapp' | 'key';
}

export interface CardProfile {
  handle: string;
  title: string;
  avatarUrl: string;
  status: 'online' | 'busy' | 'analyzing';
  links: SocialLink[];
}