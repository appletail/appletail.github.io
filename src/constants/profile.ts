import profileImg from '@/assets/images/profile/사진.webp';
import valueUpPrize from '@/assets/images/profile/VALUE_UP_공모전_대상.webp';
import SSAFYPrize1 from '@/assets/images/profile/싸피_자율우수상.webp';
import SSAFYPrize2 from '@/assets/images/profile/싸피_공통우수상.webp';
import SSAFYPrize3 from '@/assets/images/profile/싸피_성적우수상.webp';
import SSAFYCert from '@/assets/images/profile/싸피_수료증.webp';
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
  selfIntroduction: `깔끔한 것을 좋아하는 프론트엔드 엔지니어로 React, Github, AWS를 이용해 프로젝트의 기획부터 개발, 배포 등 프로젝트 전 과정을 해본 경험이 있습니다.

개발 프로세스에 대해 많은 관심을 가지고 있습니다. 개인적으로 버전 관리를 중요시해 개인 프로젝트를 할 때도 브랜치, 커밋 메시지, PR 등을 습관화하고 있습니다. 또한, 클린코드를 작성하는 것을 중요시하여 코드를 나누고 추상화해 읽기 편한 코드를 작성하기 위해 노력합니다. 팀 프로젝트를 할 때도 버전관리의 용이함을 위해 템플릿을 관리했으며, 클린코드를 위한 리팩토링을 담당했습니다.

기초를 쌓는 것이 중요하다고 생각합니다. 호이스팅, 프로토타입 등 javascript의 기초를 공부했으며, vite, cra가 아닌 webpack과 babel을 사용해 프로젝트를 구축해 봤습니다. 또한, DB의 실무적 역량을 기르기 위해 SQLD 자격증을 취득했으며, 공룡책 OS 강의를 수강했습니다. 현재는 정보보안기사와 정보처리기사 자격증을 취득하기 위해 학습 중이며, 백엔드와의 소통을 위해 자바 스프링을 학습 중입니다.

꾸준한 학습을 통해 성장하는 프론트엔드 개발자가 되겠습니다.
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
