import { createBrowserRouter } from 'react-router-dom';
import { Flex, Heading } from '@/components/basic';

import _ROUTERS from '@/constants/route.constant';

import PublicPage from '@/pages/public';
import HomePage from '@/pages/public/home';

const routers = createBrowserRouter([
  {
    path: '/',
    element: <PublicPage />,
    children: [
      {
        path: _ROUTERS.home,
        element: <HomePage />,
      },
      {
        path: '*',
        element: (
          <Flex
            $style={{
              h: '100vh',
              hAlign: 'center',
              p: '300px 0 0',
            }}
          >
            <Heading level={1}>404 Not found page</Heading>
          </Flex>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <></>,
  },
]);

export default routers;
