import projectImg from '@/assets/images/image2.jpg';
import PuppyLink from '@/assets/images/projects/PuppyLink/logo.png';
import Nogari from '@/assets/images/projects/Nogari/logo.png';
import Tink from '@/assets/images/projects/Tink/logo.png';
import LunchBot from '@/assets/images/projects/LunchBot/logo.png';

const projects = [
  [
    {
      id: 'Portfolio',
      name: 'Portfolio',
      cardImg: projectImg,
      category: 'WEB PROJECT',
    },
    {
      id: 'Nogari',
      name: 'Nogari',
      cardImg: Nogari,
      category: 'WEB PROJECT',
    },
    {
      id: 'Tink',
      name: 'Tink',
      cardImg: Tink,
      category: 'WEB PROJECT',
    },
    {
      id: 'PuppyLink',
      name: 'PuppyLink',
      cardImg: PuppyLink,
      category: 'WEB PROJECT',
    },
  ],
  [
    {
      id: 'LunchBot',
      name: 'LunchBot',
      cardImg: LunchBot,
      category: 'OTHERS',
    },
    {
      id: 'shortURL',
      name: 'shortURL',
      cardImg: LunchBot,
      category: 'OTHERS',
    },
  ],
];

export default projects;
