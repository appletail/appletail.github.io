import React from 'react';
import { useLocation } from 'react-router-dom';
import ProjectImageCarousel from '@/components/ProjectImageCarousel/ProjectImageCarousel';
import projectImg1 from '@/assets/images/image1.jpg';
import projectImg2 from '@/assets/images/image2.jpg';
import projectImg3 from '@/assets/images/image3.jpg';

function ProjectDetail() {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname}
      <div>
        <ProjectImageCarousel
          images={[projectImg1, projectImg2, projectImg3]}
        />
      </div>
    </div>
  );
}

export default ProjectDetail;
