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
    logo: 'https://images.carexpert.com.au/resize/400/-/cms/v1/media/signature-logo-aus-v26-1.png',
    socialLinks: [
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/CarExpertAus',
        icon: 'https://assets.carexpert.com.au/email/images/icon-youtube-big.png',
      },
      {
        name: 'Facebook',
        url: 'https://facebook.com/CarExpertAus',
        icon: 'https://assets.carexpert.com.au/email/images/icon-facebook-big.png',
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com/carexpert.com.au',
        icon: 'https://assets.carexpert.com.au/email/images/icon-instagram-big.png',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/CarExpertAus',
        icon: 'https://assets.carexpert.com.au/email/images/icon-twitter-big.png',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/carexpertaus/',
        icon: 'https://c-images.carexpert.com.au/upload/v1680489658/socials/linkedIn_q33xin.jpg',
      },
      {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@carexpertau',
        icon: 'https://images.carexpert.com.au/resize/400/-/cms/v1/media/tiktok.png',
      },
    ],
  },
  nz: {
    logo: 'https://images.carexpert.com.au/resize/400/-/cms/v1/media/signature-logo-nz-v26-1.png',
    socialLinks: [
      // {
      //   name: 'YouTube',
      //   url: 'https://www.youtube.com/CarExpertNZ', // Placeholder - update with actual URL
      //   icon: '/assets/icons/youtube.png',
      // },
      // {
      //   name: 'Facebook',
      //   url: 'https://facebook.com/CarExpertNZ', // Placeholder - update with actual URL
      //   icon: '/assets/icons/facebook.png',
      // },
      // {
      //   name: 'Instagram',
      //   url: 'https://instagram.com/carexpert.co.nz', // Placeholder - update with actual URL
      //   icon: '/assets/icons/instagram.png',
      // },
      // {
      //   name: 'Twitter',
      //   url: 'https://twitter.com/CarExpertNZ', // Placeholder - update with actual URL
      //   icon: '/assets/icons/twitter.png',
      // },
      // {
      //   name: 'LinkedIn',
      //   url: 'https://www.linkedin.com/company/carexpertnz/', // Placeholder - update with actual URL
      //   icon: '/assets/icons/linkedin.png',
      // },
    ],
  },
};

