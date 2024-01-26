import { createHashRouter } from 'react-router-dom';
import pathName from '@/route/pathName';
import RootLayout from '@/layouts/RootLayout';
import Introduction from '@/pages/Introduction/Introduction';
import ProjectLayout from '@/layouts/ProjectLayout';
import ProjectList from '@/pages/Project/ProjectList/ProjectList';
import ProjectDetail from '@/pages/Project/ProjectDetail/ProjectDetail';
import Profile from '@/pages/Profile/Profile';

const router = createHashRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: pathName.Introduction,
        element: <Introduction />,
      },
      {
        element: <ProjectLayout />,
        children: [
          {
            path: pathName.project,
            element: <ProjectList />,
          },
          {
            path: `${pathName.project}/:id`,
            element: <ProjectDetail />,
          },
        ],
      },
      {
        path: pathName.profile,
        element: <Profile />,
      },
    ],
  },
]);

export default router;
