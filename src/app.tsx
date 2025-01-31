import { ThemeProvider } from "./components/theme-provider";
import { RouterProvider } from "react-router";
import { routes } from "@/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

export function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
