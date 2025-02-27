import { HeaderLink } from '@/components/header-link'
import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { Cross as Hamburger } from 'hamburger-react'
import { Github } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { twMerge } from 'tailwind-merge'

export function Header() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const location = useLocation()

  function handleMenuClick() {
    setIsHamburgerOpen(current => !current)
    // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
    isHamburgerOpen
      ? // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
        (document.body.style.overflow = 'auto')
      : // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
        (document.body.style.overflow = 'hidden')
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setIsHamburgerOpen(false)
    document.body.style.overflow = 'auto'
  }, [location])

  return (
    <div className="w-full border-b border-border">
      <header className="max-w-7xl w-full mx-auto py-2 px-4 flex items-center gap-4">
        <Link
          to={'/'}
          className="font-bold text-lg w-full max-w-36 leading-tight z-[2]"
        >
          REST Countries API Project
        </Link>
        <div
          className={twMerge(
            'hidden sm:flex items-center justify-between w-full',
            isHamburgerOpen &&
              'z-[1] flex flex-col fixed top-0 bottom-0 left-0 right-0 bg-background justify-evenly'
          )}
        >
          <nav className="flex flex-col sm:flex-row items-center gap-6 sm:gap-4">
            <HeaderLink to={'/'} className="text-xl sm:text-base">
              Home
            </HeaderLink>
            <HeaderLink to={'/countries'} className="text-xl sm:text-base">
              Countries
            </HeaderLink>
            <HeaderLink to={'/about'} className="text-xl sm:text-base">
              About
            </HeaderLink>
          </nav>
          <div className="sm:ml-auto flex items-center gap-2">
            <Button variant="outline" size="icon" asChild>
              <Link to={'https://github.com/lheerme'} target="_blank">
                <Github />
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
        <div className="sm:hidden ml-auto z-[1]">
          <Hamburger toggled={isHamburgerOpen} toggle={handleMenuClick} />
        </div>
      </header>
    </div>
  )
}
