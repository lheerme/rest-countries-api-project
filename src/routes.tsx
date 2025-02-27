import { NotFound } from '@/pages/404'
import { About } from '@/pages/app/about'
import { Countries } from '@/pages/app/countries'
import { CountryDetail } from '@/pages/app/country-detail'
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
      { path: '/countries', element: <Countries /> },
      {
        path: '/countries/:countryCode',
        element: <CountryDetail />,
      },
      { path: '/about', element: <About /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
