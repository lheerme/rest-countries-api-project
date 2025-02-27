import type { ComponentProps } from 'react'
import { Link, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

export type HeaderLinkProps = ComponentProps<typeof Link>

export function HeaderLink(props: HeaderLinkProps) {
  const { pathname } = useLocation()
  const { className, ...rest } = props

  return (
    <Link
      {...rest}
      data-current={
        props.to === '/'
          ? pathname.toLowerCase() === props.to
          : pathname.toLowerCase().startsWith(String(props.to))
      }
      className={twMerge(
        'font-medium data-[current=true]:[text-shadow:1px_0_0_currentColor] hover:[text-shadow:1px_0_0_currentColor] hover:transition-shadow',
        className
      )}
    />
  )
}
