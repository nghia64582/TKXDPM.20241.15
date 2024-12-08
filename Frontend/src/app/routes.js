import MainLayout from 'src/layouts/MainLayout';
import NotFoundPage from 'src/layouts/NotFoundPage';
import HomePage from "src/features/home";

const routes = [
   {
      path: '/',
      element: <MainLayout />,
     children: [
       {
         path: '/',
         element: <HomePage />,
       },
       { path: '*', element: <NotFoundPage /> },
     ],
   },
   {
      path: '/authen',
      element: <MainLayout />,
      children: [
         { path: '*', element: <NotFoundPage /> },
      ],
   },
];

export default routes;
