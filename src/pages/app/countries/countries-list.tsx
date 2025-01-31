import { Country } from "@/interfaces/country"
import { useQuery } from "@tanstack/react-query"
import { CountryCard } from "@/pages/app/countries/country-card"
import { useSearchParams } from "react-router"
import { CountriesListSkeleton } from "@/pages/app/countries/countries-list-skeleton"

export function CountriesList() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') ?? ''
  const region = searchParams.get('region')

  const { data, isLoading } = useQuery<Country[]>({
    queryKey: ['countries-list', region],
    queryFn: async () => {
      const response = (await fetch(`https://restcountries.com/v3.1/${region ? `region/${region}` : 'all'}?fields=name,flags,cca3`))
      const data = await response.json()

      return data
    }
  })

  const searchFilter = query.length > 0
      ? data?.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()))
      : data

  return (
    <ul className="flex-1 grid grid-cols-2 min-[930px]:grid-cols-3 gap-5 justify-items-center my-6">
      {isLoading ? (
        <CountriesListSkeleton />
      ) : (
        <>
          {searchFilter?.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </>
      )}
    </ul>
  )
}