declare module "*.module.css" {
  const content: Record<string, string>;
  export default content;
}
declare module "*.jpg"
declare module "*.png"

interface Project {
  id: string;
  name: string;
  cardImg: string;
  category: string;
}