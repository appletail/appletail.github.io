declare module '*.module.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.jpg';
declare module '*.png';
declare module '*.md';

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
