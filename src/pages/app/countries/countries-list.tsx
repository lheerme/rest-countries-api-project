import type { Country } from '@/interfaces/country'
import { CountriesListSkeleton } from '@/pages/app/countries/countries-list-skeleton'
import { CountryCard } from '@/pages/app/countries/country-card'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'react-router'

export function CountriesList() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') ?? ''
  const region = searchParams.get('region')

  const { data, isLoading } = useQuery<Country[]>({
    queryKey: ['countries-list', region],
    queryFn: async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/${region ? `region/${region}` : 'all'}?fields=name,flags,cca3`
      )
      const data = await response.json()

      return data
    },
    staleTime: Number.POSITIVE_INFINITY,
    refetchOnWindowFocus: false,
    retry: 2,
  })

  const searchFilter =
    query.length > 0
      ? data?.filter(country =>
          country.name.common.toLowerCase().includes(query.toLowerCase())
        )
      : data

  return (
    <ul className="flex-1 grid grid-cols-2 min-[930px]:grid-cols-3 gap-5 justify-items-center my-6">
      {isLoading ? (
        <CountriesListSkeleton />
      ) : (
        <>
          {searchFilter?.map(country => (
            <CountryCard key={country.cca3} country={country} />
          ))}
        </>
      )}
    </ul>
  )
}
