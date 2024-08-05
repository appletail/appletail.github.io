declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.jpg';
declare module '*.png';
declare module '*.md';
declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  export default ReactComponent;
}

interface Project {
  id: string;
  name: string;
  cardImg: string;
  category: string;
}

interface ProjectSummary {
  description: string;
  period: string;
  member: string;
  platform: string;
  stacks: string[];
}
