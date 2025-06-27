import profileImg from '@/assets/images/profile/사진.webp';
import valueUpPrize from '@/assets/images/profile/VALUE_UP_공모전_대상.webp';
import SSAFYPrize1 from '@/assets/images/profile/싸피_자율우수상.webp';
import SSAFYPrize2 from '@/assets/images/profile/싸피_공통우수상.webp';
import SSAFYPrize3 from '@/assets/images/profile/싸피_성적우수상.webp';
import SSAFYCert from '@/assets/images/profile/싸피_수료증.webp';
import EIP from '@/assets/images/profile/정보처리기사.webp';
import sqld from '@/assets/images/profile/sqld.webp';
import OPIc from '@/assets/images/profile/OPIc.webp';
import mktest from '@/assets/images/profile/매경TEST.webp';
import react from '@/assets/images/icons/React.svg';
import javascript from '@/assets/images/icons/JavaScript.svg';
import typescript from '@/assets/images/icons/Typescript.svg';
import vite from '@/assets/images/icons/Vitejs.svg';
import webpack from '@/assets/images/icons/webpack.svg';
import tailwind from '@/assets/images/icons/Tailwind_CSS.svg';
import git from '@/assets/images/icons/Git.svg';
import python from '@/assets/images/icons/Python.svg';
import figma from '@/assets/images/icons/Figma.svg';
import jira from '@/assets/images/icons/Jira.svg';

const profile = {
  profileImg,
  name: '심재원',
  selfIntroduction: `프로젝트에 맞는 최적의 기술을 선택하여 최선의 결과물을 도출하기위해 노력합니다.
아토믹한 컴포넌트를 만드는 것을 좋아하며 재사용성과 확장성을 고려하여 개발합니다.
사용자의 의견을 수렴하고 더 나은 서비스로 발전하는 것이 가장 중요하게 생각합니다.
새로운 기술을 도입하고 공부하는 과정을 가장 즐거워합니다.
언제나 새로운 도전을 통해 성장하는 프론트엔드 개발자가 되겠습니다.
`,
  skills: [
    { name: 'react', svg: react },
    { name: 'javascript', svg: javascript },
    { name: 'typescript', svg: typescript },
    { name: 'vite', svg: vite },
    { name: 'webpack', svg: webpack },
    { name: 'tailwind', svg: tailwind },
    { name: 'git', svg: git },
    { name: 'python', svg: python },
    { name: 'figma', svg: figma },
    { name: 'jira', svg: jira },
  ],
  educations: [
    {
      period: '2023.06',
      content: '삼성 청년 SW 아카데미 우수 수료',
      picture: SSAFYCert,
    },
    { period: '2020.02', content: '경북대학교 경영학' },
  ],
  certificates: [
    { picture: EIP, date: '2025.06', content: '정보처리기사' },
    { picture: sqld, date: '2022.12', content: 'SQL 개발자' },
    { picture: OPIc, date: '2023.09', content: 'OPIc IH' },
    { picture: mktest, date: '2024.07', content: '매경TEST 우수' },
  ],
  contact: {
    email: 'csappletail@gmail.com',
    github: 'https://github.com/appletail',
    blog: 'https://appletail.tistory.com/',
  },
  awards: [
    {
      picture: valueUpPrize,
      date: '2023.05',
      name: 'VALUE UP 공모전',
      prize: '대상',
      host: '대한상공회의소',
      detail: '',
    },
    {
      picture: SSAFYPrize1,
      date: '2023.05',
      name: 'SSAFY 자율 프로젝트',
      prize: '우수상',
      host: '삼성전자주식회사',
      detail: '',
    },
    {
      picture: SSAFYPrize2,
      date: '2023.02',
      name: 'SSAFY 공통 프로젝트',
      prize: '우수상',
      host: '삼성전자주식회사',
      detail: '',
    },
    {
      picture: SSAFYPrize3,
      date: '2022.11',
      name: 'SSAFY 1학기 성적우수상',
      prize: '1학기 성적우수상',
      host: '삼성전자주식회사',
      detail: '',
    },
  ],
};

export default profile;
