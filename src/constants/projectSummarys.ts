import puppy_header from '@/assets/images/projects/PuppyLink/header.png';
import nogari_header from '@/assets/images/projects/Nogari/header.png';
import tink_header from '@/assets/images/projects/Tink/header.png';
import lunch_header from '@/assets/images/projects/LunchBot/header.png';

const projectSummarys = {
  Portfolio: {
    header_image: puppy_header,
    description: 'Portfolio 기능을 활용한 퍼피링크(puppy link) 프로젝트',
    period: '23.01.17 ~ 23.02.17',
    member: '6명 (FE 2인 / BE 4인)',
    platform: 'Web Mobile',
    stacks: [
      'React',
      'TypeScript',
      'Vite',
      'CRX',
      'Styled-Component',
      'AWS lambda',
    ],
  },
  Nogari: {
    header_image: nogari_header,
    description:
      'OPEN API를 활용해 notion과 tistory, github를 연동한 프로젝트입니다. 사용자는 notion에서 작성한 게시글을 모양 그대로 tistory와 github로 이전할 수 있습니다.',
    period: '23.04.10 ~ 23.05.22',
    member: '6명 (FE 2인 / BE 4인)',
    platform: 'Web',
    stacks: [
      'React',
      'TypeScript',
      'Vite',
      'CRX',
      'Styled-Component',
      'AWS lambda',
    ],
  },
  Tink: {
    header_image: tink_header,
    description:
      'Ravelry의 API를 통해 수집한 데이터를 바탕으로 뜨개질 도안 및 실을 추천하는 프로젝트입니다. 또한, 이미지에서 색을 추출하고 어울리는 색을 추천하는 기능이 포함되어있습니다.',
    period: '23.03.06 ~ 23.04.07',
    member: '6명 (FE 3인 / BE 3인)',
    platform: 'Web',
    stacks: [
      'TypeScript',
      'React',
      'Vite',
      'Tailwind-css',
      'react-quill',
      'extract-colors',
      'simpler-color',
    ],
  },
  PuppyLink: {
    header_image: puppy_header,
    description:
      'OCR 기능을 활용한 강아지 해외이동봉사 중개서비스 프로젝트입니다. 봉사자와 봉사단체는 손쉽게 서로를 찾을 수 있습니다. 또한 기존의 복잡했던 신청절차를 간소화하고 봉사를 체계적으로 관리하는 것을 목표로 했습니다.',
    period: '23.01.17 ~ 23.02.17',
    member: '6명 (FE 2인 / BE 4인)',
    platform: 'Web Mobile',
    stacks: [
      'React',
      'React-router',
      'TypeScript',
      'Vite',
      'Tailwind-css',
      'css-module',
      'axios',
    ],
  },
  LunchBot: {
    header_image: lunch_header,
    description:
      'SSAFY 광주 교육생들을 위해 점심메뉴를 알려주는 디스코드 챗봇 프로젝트입니다. "!점심" 키워드를 사용해 점심메뉴를 호출할 수 있으며, "!야옹" 키워드를 사용해 임의의 고양이 사진을 호출할 수 있습니다.',
    period: '23.04.10 ~ 23.05.01',
    member: '1인 토이프로젝트',
    platform: 'Discord',
    stacks: ['Python', 'discord', 'requests'],
  },
  shortURL: {
    header_image: lunch_header,
    description:
      'SSAFY 광주 교육생들을 위해 점심메뉴를 알려주는 디스코드 챗봇 프로젝트입니다. "!점심" 키워드를 사용해 점심메뉴를 호출할 수 있으며, "!야옹" 키워드를 사용해 임의의 고양이 사진을 호출할 수 있습니다.',
    period: '23.04.10 ~ 23.05.01',
    member: '1인 토이프로젝트',
    platform: 'Discord',
    stacks: ['Python', 'discord', 'requests'],
  },
};

export default projectSummarys;
