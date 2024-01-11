import { createHashRouter } from 'react-router-dom';
import Test from '@/components/Test';
import Test2 from '@/components/Test2';

const router = createHashRouter([
  {
    path: '',
    element: <Test />,
  },
  {
    path: '/test2',
    element: <Test2 />,
  },
]);

export default router;
