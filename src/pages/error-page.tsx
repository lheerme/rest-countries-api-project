import { Link, useRouteError } from 'react-router'

export function ErrorPage() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center  justify-center gap-2">
      <h1 className="text-center text-4xl font-bold">
        Opa, parece que algo aconteceu...
      </h1>
      <p className="text-accent-foreground">
        Um erro aconteceu na aplicação, abaixo você encontra mais detalhes
      </p>
      <pre>{error?.message}</pre>
      <p className="text-accent-foreground">
        Voltar para a{' '}
        <Link to="/" className="text-violet-600 dark:text-violet-400">
          Home
        </Link>
      </p>
    </div>
  )
}
