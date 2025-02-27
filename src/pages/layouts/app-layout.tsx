import { Header } from '@/components/header'
import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="h-dvh flex flex-col w-full">
      <Header />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 pb-6">
        <Outlet />
      </main>
    </div>
  )
}
