import { ComponentProps } from "react"
import { Link, useLocation } from "react-router"

export type HeaderLinkProps = ComponentProps<typeof Link>

export function HeaderLink(props: HeaderLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      {...props}
      data-current={pathname.toLowerCase() === props.to}
      className="font-medium data-[current=true]:[text-shadow:1px_0_0_currentColor] hover:[text-shadow:1px_0_0_currentColor] hover:transition-shadow"
    />
  )
}