import { ThemeProvider } from "./components/theme-provider";
import { RouterProvider } from "react-router";
import { routes } from "@/routes";

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
    </ThemeProvider>
  )
}
