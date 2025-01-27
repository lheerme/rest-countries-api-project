import { createBrowserRouter } from "react-router";
import { AppLayout } from "@/pages/layouts/app-layout";
import { Home } from "@/pages/app/home";
import { Countries } from "@/pages/app/countries";
import { About } from "@/pages/app/about";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/countries', element: <Countries /> },
      { path: '/about', element: <About /> },
    ],
  },
])