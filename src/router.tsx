import { createBrowserRouter } from 'react-router-dom';
import Test from '@/components/Test';
import Test2 from '@/components/Test2';

const router = createBrowserRouter(
  [
    {
      path: '',
      element: <Test />,
    },
    {
      path: '/test2',
      element: <Test2 />,
    },
  ],
  {
    basename: '/ShimJaeWon',
  }
);

export default router;
