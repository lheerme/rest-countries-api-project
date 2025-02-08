import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/pages/layouts/app-layout";
import { Home } from "@/pages/app/home";
import { Countries } from "@/pages/app/countries";
import { About } from "@/pages/app/about";
import { CountryDetail } from "@/pages/app/country-detail";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <Error />,
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
  // {
  //   path: '*',
  //   element: <NotFound />,
  // },
])