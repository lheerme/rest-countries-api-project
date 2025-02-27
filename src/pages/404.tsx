import { Link } from 'react-router'

export function NotFound() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-2">
      <h1 className="text-center text-4xl font-bold">Página não encontrada</h1>
      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link to="/" className="text-violet-600 dark:text-violet-400">
          Home
        </Link>
      </p>
    </div>
  )
}
