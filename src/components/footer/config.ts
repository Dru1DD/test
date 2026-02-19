import telegramIcon from '@/assets/images/social/telegram.svg';
import discordIcon from '@/assets/images/social/discord.svg';
import mediumIcon from '@/assets/images/social/medium.svg';
import docsIcon from '@/assets/images/social/docs.svg';
import xIcon from '@/assets/images/social/x.svg';

export const socilConfig = [
  {
    icon: telegramIcon,
    title: 'Telegram Channel',
    link: 'https://t.me/urchin_space',
    bgColor: 'bg-blue-dark',
  },
  {
    icon: telegramIcon,
    title: 'Telegram Chat',
    link: 'https://t.me/urchin_chat',
    bgColor: 'bg-teal-dark',
  },
  {
    icon: discordIcon,
    title: 'Discord',
    link: 'https://discord.com/invite/BEjTaAcrsp',
    bgColor: 'bg-indigo-dark',
  },
  {
    icon: xIcon,
    title: 'X (Twitter)',
    link: 'https://x.com/urchinspace',
    bgColor: 'bg-gray-medium',
  },
  {
    icon: docsIcon,
    title: 'Docs',
    link: 'https://docs.sui.io',
    bgColor: 'bg-black',
    disabled: true,
  },
  {
    icon: mediumIcon,
    title: 'Medium',
    link: 'https://medium.com/@urchin_official',
    bgColor: 'bg-green-dark',
  },
];
