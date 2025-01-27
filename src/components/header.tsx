import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router";
import { HeaderLink } from "@/components/header-link";

export function Header() {
  return (
    <div className="w-full shadow-lg">
      <header className="max-w-7xl w-full mx-auto py-2 px-4 flex items-center gap-4">
        <Link to={'/'} className="font-bold text-lg w-full max-w-36 leading-tight">REST Countries API Project</Link>
        <nav className="flex items-center gap-4">
          <HeaderLink to={'/'} className="font-medium">Home</HeaderLink>
          <HeaderLink to={'/countries'} className="font-medium">Countries</HeaderLink>
          <HeaderLink to={'/about'} className="font-medium">About</HeaderLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {/* Colocar como link depois */}
          <Button variant="outline" size="icon" asChild>
            <Link to={'https://github.com/lheerme'} target="_blank">
              <Github />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </header>
    </div>
  )
}