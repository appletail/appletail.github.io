import profileImg from '@/assets/images/profile/사진.jpg';
import valueUpPrize from '@/assets/images/profile/VALUE_UP_공모전_대상.jpg';
import SSAFYPrize1 from '@/assets/images/profile/싸피_자율우수상.jpg';
import SSAFYPrize2 from '@/assets/images/profile/싸피_공통우수상.jpg';
import SSAFYPrize3 from '@/assets/images/profile/싸피_성적우수상.jpg';
import SSAFYCert from '@/assets/images/profile/싸피_수료증.jpg';
import sqld from '@/assets/images/profile/sqld.png';
import OPIc from '@/assets/images/profile/OPIc.png';
import mktest from '@/assets/images/profile/매경TEST.png';

const profile = {
  profileImg,
  name: '심재원',
  aboutMe:
    '올해의 게임 175여 개를 수상하고 250개 이상의 완벽한 평가를 받은 Red Dead Redemption 2는 현대 시대가 시작될 무렵 무법자인 아서 모건과 악명 높은 반 더 린드 갱단이 미국 전역을 따라 도주하는 장대한 서사시입니다. 모두가 함께 즐길 수 있는 생생한 세계인 Red Dead 온라인 역시 포함됩니다. 올해의 게임 175여 개를 수상하고 250개 이상의 완벽한 평가를 받은 Red Dead Redemption 2는 현대 시대가 시작될 무렵 무법자인 아서 모건과 악명 높은 반 더 린드 갱단이 미국 전역을 따라 도주하는 장대한 서사시입니다. 모두가 함께 즐길 수 있는 생생한 세계인 Red Dead 온라인 역시 포함됩니다.',
  skills: [
    'React',
    'JavaScript',
    'TypeScript',
    'vite',
    'webpack',
    'tailwind css',
    'git',
    'python',
    'Figma',
    'Jira',
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
    phone: '010-7338-7392',
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
      content: '',
    },
    {
      picture: SSAFYPrize1,
      date: '2023.05',
      name: 'SSAFY 자율 프로젝트',
      prize: '우수상',
      host: '삼성전자주식회사',
      content: '',
    },
    {
      picture: SSAFYPrize2,
      date: '2023.02',
      name: 'SSAFY 공통 프로젝트',
      prize: '우수상',
      host: '삼성전자주식회사',
      content: '',
    },
    {
      picture: SSAFYPrize3,
      date: '2022.11',
      name: 'SSAFY 1학기 성적우수상',
      prize: '1학기 성적우수상',
      host: '삼성전자주식회사',
      content: '',
    },
  ],
};

export default profile;
