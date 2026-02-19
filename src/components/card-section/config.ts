import yesNoImage from '@/assets/images/yes_no.webp';
import gamepageImage from '@/assets/images/gamepad.webp';
import paintImage from '@/assets/images/paint.webp';
import codeImage from '@/assets/images/code.webp';

export const cardsConfig = [
  {
    imgSrc: yesNoImage,
    title: 'Social Layer',
    description:
      'Share predictions, follow top traders, join groups, interact with the community, and copy-trade the best moves.',
    bgColor: 'bg-brown-dark',
  },
  {
    imgSrc: gamepageImage,
    title: 'Gamified Experience',
    description: 'Classic and quick predictions, duels, and reputation turn every prediction into a game.',
    bgColor: 'bg-gray',
  },
  {
    imgSrc: paintImage,
    title: 'AI-Powered Insights',
    description: 'Track real-time sentiment and insights to see how others think and act.',
    bgColor: 'bg-purple-dark',
  },
  {
    imgSrc: codeImage,
    title: 'Developer-friendly',
    description: 'Built for bot developers and product teams with robust SDKs and a clear, intuitive DX.',
    bgColor: 'bg-red-dark',
  },
];
