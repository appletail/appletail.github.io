import React from 'react';
import { useLocation } from 'react-router-dom';

function ProjectDetail() {
  const { pathname } = useLocation();
  return <div>{pathname}</div>;
}

export default ProjectDetail;
