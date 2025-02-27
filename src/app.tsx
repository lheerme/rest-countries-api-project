import { ThemeProvider } from '@/components/theme-provider'
import { routes } from '@/routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'

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
