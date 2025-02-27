import globeImg from '@/assets/globe.png'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export function Home() {
  return (
    <div className="flex items-center justify-between h-full">
      <div className="w-full max-w-lg md:max-w-[49%] space-y-6">
        <h1 className="font-bold text-4xl">🌍 Explore the World</h1>
        <p className="text-xl">
          Discover detailed information about countries around the globe with
          ease! Explore flags, populations, languages, and more, powered by
          up-to-date data from the{' '}
          <Link
            to={'https://restcountries.com/'}
            target="_blank"
            className="hover:underline"
          >
            Rest Countries API.
          </Link>
        </p>
        <div className="flex items-center gap-3">
          <Button asChild size="lg" className="text-lg">
            <Link to={'/countries'}>
              Explore <ArrowRight />
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link to={'/about'}>Learn more</Link>
          </Button>
        </div>
      </div>
      <div className="hidden md:block max-w-64 lg:max-w-96 w-full mx-auto">
        <img className="w-full h-full" src={globeImg} alt="World Globe" />
      </div>
    </div>
  )
}
