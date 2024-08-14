declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}
declare module '*.png' {
  const png: string;
  export default png;
}
declare module '*.md' {
  const md: string;
  export default md;
}
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
  header_image: string;
  description: string;
  period: string;
  member: string;
  platform: string;
  stacks: string[];
}

interface ErrResponse {
  err: {
    response: {
      data: {
        code: '1403' | '1500' | '2403' | '3403';
      };
    };
  };
}
