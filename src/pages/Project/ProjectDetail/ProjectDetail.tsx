import React, { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ProjectDetailTemplate from '@/template/ProjectDetailTemplate';
import projectSummarys from '@/constants/projectSummarys';

function ProjectDetail() {
  const { pathname } = useLocation();
  const projectName = pathname.split('/').reverse()[0];

  const [imageList, setImageList] = useState<any>([]);
  const images = useMemo(
    () => require.context(`@/assets/images/projects/`, true, /\d.(webp)$/),
    []
  );

  useEffect(() => {
    const loadImages = async () => {
      const regex = new RegExp(`^.\\/${projectName}`);
      const imgFilter = images.keys().filter((url) => url.match(regex));
      const imgUrlArr = await Promise.all(
        imgFilter.map((image) => images(image))
      );
      setImageList(imgUrlArr);
    };

    loadImages();
  }, [pathname]);

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
        images={imageList}
        projectName={projectName}
        projectSummary={projectSummarys[projectName]}
      />
    </div>
  );
}

export default ProjectDetail;
