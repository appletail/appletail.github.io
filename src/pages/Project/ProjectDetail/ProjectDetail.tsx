import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import projectImg1 from '@/assets/images/image1.jpg';
import projectImg2 from '@/assets/images/image2.jpg';
import projectImg3 from '@/assets/images/image3.jpg';
import ProjectDetailTemplate from '@/template/ProjectDetailTemplate';

function ProjectDetail() {
  const { pathname } = useLocation();
  const projectName = pathname.split('/').reverse()[0];
  const images = [projectImg1, projectImg2, projectImg3];
  const description =
    '올해의 게임 175여 개를 수상하고 250개 이상의 완벽한 평가를 받은 Red Dead Redemption 2는 현대 시대가 시작될 무렵 무법자인 아서 모건과 악명 높은 반 더 린드 갱단이 미국 전역을 따라 도주하는 장대한 서사시입니다. 모두가 함께 즐길 수 있는 생생한 세계인 Red Dead 온라인 역시 포함됩니다.';
  const period = '23.01.17 ~ 23.02.17';
  const member = '6명 (FE 2인 / BE 4인)';
  const platform = 'Web Mobile';
  const stacks = [
    'React',
    'TypeScript',
    'Vite',
    'CRX',
    'Styled-Component',
    'AWS lambda',
  ];

  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    (() => {
      import(`@/assets/projects/${projectName}/${projectName}.md`).then(
        (markdownText) => {
          setMarkdownContent(markdownText.default);
        }
      );
    })();
  }, [projectName]);

  return (
    <div>
      <ProjectDetailTemplate
        markdown={markdownContent}
        images={images}
        projectName={projectName}
        projectSummary={{
          description,
          period,
          member,
          platform,
          stacks,
        }}
      />
    </div>
  );
}

export default ProjectDetail;
