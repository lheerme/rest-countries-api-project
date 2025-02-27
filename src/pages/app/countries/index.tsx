import { CountriesList } from '@/pages/app/countries/countries-list'
import { CountrySearchBar } from '@/pages/app/countries/country-search-bar'
import { RegionFilter } from '@/pages/app/countries/region-filter'

export function Countries() {
  return (
    <div className="flex flex-col gap-4 min-h-full pt-8">
      <h1 className="font-bold text-2xl">Countries</h1>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2">
        <CountrySearchBar />
        <RegionFilter />
      </div>
      <CountriesList />
    </div>
  )
}
