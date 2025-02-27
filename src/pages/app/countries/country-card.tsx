import type { Country } from '@/interfaces/country'
import { Link } from 'react-router'

interface CountryCardProps {
  country: Country
}

export function CountryCard({ country }: CountryCardProps) {
  return (
    <li>
      <Link
        to={`${country.cca3.toLowerCase()}`}
        className="flex flex-col w-44 sm:w-64 h-40 sm:h-56 rounded-md border border-input bg-background hover:ring-2 hover:ring-ring hover:transition-shadow group px-6 pt-6"
      >
        <div className="w-full h-3/4 overflow-hidden">
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <p
            title={country.name.common}
            className="text-center text-sm sm:text-base truncate"
          >
            {country.name.common}
          </p>
        </div>
      </Link>
    </li>
  )
}
