export type Country = 'au' | 'nz';

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface CountryConfig {
  logo: string;
  socialLinks: SocialLink[];
}

export const socialMediaConfig: Record<Country, CountryConfig> = {
  au: {
    logo: '/assets/logos/signature_logo_aus.png',
    socialLinks: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/CarExpertAus',
        icon: '/assets/icons/youtube.png',
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/CarExpertAus',
        icon: '/assets/icons/facebook.png',
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/carexpert.com.au',
        icon: '/assets/icons/instagram.png',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/CarExpertAus',
        icon: '/assets/icons/twitter.png',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/carexpertaus/',
        icon: '/assets/icons/linkedin.png',
      },
      {
        name: 'TikTok',
        url: 'https://www.linkedin.com/company/carexpertaus/',
        icon: '/assets/icons/tiktok.png',
      },
    ],
  },
  nz: {
    logo: '/assets/logos/signature_logo_nz.png',
    socialLinks: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/CarExpertNZ', // Placeholder - update with actual URL
        icon: '/assets/icons/youtube.svg',
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/CarExpertNZ', // Placeholder - update with actual URL
        icon: '/assets/icons/facebook.svg',
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/carexpert.co.nz', // Placeholder - update with actual URL
        icon: '/assets/icons/instagram.svg',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/CarExpertNZ', // Placeholder - update with actual URL
        icon: '/assets/icons/twitter.svg',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/carexpertnz/', // Placeholder - update with actual URL
        icon: '/assets/icons/linkedin.svg',
      },
    ],
  },
};

