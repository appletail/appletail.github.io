import PuppyLink from '@/assets/images/projects/PuppyLink/header.webp';
import Nogari from '@/assets/images/projects/Nogari/header.webp';
import Tink from '@/assets/images/projects/Tink/header.webp';
import LunchBot from '@/assets/images/projects/LunchBot/header.webp';
import shortURL from '@/assets/images/projects/shortURL/header.webp';
import Portfolio from '@/assets/images/projects/Portfolio/header.webp';

const projectSummarys = {
  Portfolio: {
    header_image: Portfolio,
    description:
      '그동안 수행했던 프로젝트를 소개하는 Portfolio 프로젝트입니다. 제가 좋아하는 Steam을 테마로 만들었습니다. scroll animation, carousel, modal과 같은 기능을 최대한 라이브러리의 사용없이 제작했습니다. 프로젝트 상세페이지의 경우 작성의 용이함을 위해 markdown을 html로 변환하는 라이브러리를 사용했습니다.',
    period: '24.01.08 ~ 24.08.17',
    member: '1인 프로젝트',
    platform: 'Web',
    stacks: [
      'React',
      'React-router',
      'TypeScript',
      'webpack',
      'css-module',
      'React-markdown',
    ],
  },
  Nogari: {
    header_image: Nogari,
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
    header_image: Tink,
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
    header_image: PuppyLink,
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
    header_image: LunchBot,
    description:
      'SSAFY 광주 교육생들을 위해 점심메뉴를 알려주는 디스코드 챗봇 프로젝트입니다. "!점심" 키워드를 사용해 점심메뉴를 호출할 수 있으며, "!야옹" 키워드를 사용해 임의의 고양이 사진을 호출할 수 있습니다.',
    period: '23.04.10 ~ 23.05.01',
    member: '1인 토이프로젝트',
    platform: 'Discord',
    stacks: ['Python', 'discord', 'requests'],
  },
  shortURL: {
    header_image: shortURL,
    description:
      'NAVER 단축 URL Open API를 활용한 데스크탑 애플리케이션 프로젝트 입니다. 단축을 원하는 URL을 입력시 단축 URL과 QR코드를 반환합니다. 단축 URL 클릭시 클립보드에 복사되며, QR 코드 클릭스 png 파일로 저장할 수 있습니다.',
    period: '24.08.11 ~ 24.08.13',
    member: '1인 토이프로젝트',
    platform: 'Desktop-App',
    stacks: ['Vite', 'TypeScript', 'React', 'axios', 'electron'],
  },
};

export default projectSummarys;
