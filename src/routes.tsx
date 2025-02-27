import { NotFound } from '@/pages/404'
import { Home } from '@/pages/app/home'
import { ErrorPage } from '@/pages/error-page'
import { AppLayout } from '@/pages/layouts/app-layout'
import { createBrowserRouter } from 'react-router'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/countries', element: <h1>countries</h1> },
      {
        path: '/countries/:countryCode',
        element: <h1>country detail</h1>,
      },
      { path: '/about', element: <h1>about</h1> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
