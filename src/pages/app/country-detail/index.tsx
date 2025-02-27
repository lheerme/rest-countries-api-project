import { Button } from '@/components/ui/button'
import type { CountryDetail as CountryDetailInterface } from '@/interfaces/country-detail'
import { CountryDetailSkeleton } from '@/pages/app/country-detail/country-detail-skeleton'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router'

export function CountryDetail() {
  const { countryCode } = useParams()

  const { data, isLoading } = useQuery<CountryDetailInterface>({
    queryKey: ['country-datail', countryCode],
    queryFn: async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders`
      )
      const data = await response.json()

      return data
    },
    staleTime: Number.POSITIVE_INFINITY,
    refetchOnWindowFocus: false,
    retry: 2,
  })

  if (isLoading) {
    return <CountryDetailSkeleton />
  }

  function getNativeName() {
    const names = []

    for (const key in data?.name.nativeName) {
      names.push(data?.name.nativeName[key].official)
    }

    return [...new Set(names)]
  }

  function getCurrencies() {
    const currencies = []

    for (const key in data?.currencies) {
      currencies.push(data?.currencies[key].name)
    }

    return [...new Set(currencies)]
  }

  function getLanguages() {
    const languages = []

    for (const key in data?.languages) {
      languages.push(data?.languages[key])
    }

    return [...new Set(languages)]
  }

  return (
    <div className="space-y-4">
      <div className="relative w-full max-w-[500px] mx-auto h-60 min-[375px]:h-80">
        <img
          src={data?.flags.svg}
          alt={data?.flags.alt}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 top-0 left-0 w-1/5 bg-gradient-to-r from-background to-background/0 pointer-events-none" />
        <div className="absolute bottom-0 top-0 right-0 w-1/5 bg-gradient-to-l from-background to-background/0 pointer-events-none" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-center text-2xl font-semibold">
          {data?.name.official}
        </h1>
        <span className="text-center">{getNativeName().join(' | ')}</span>
      </div>

      <div className="flex flex-col gap-2">
        <p>
          <span className="font-semibold">Population:</span>{' '}
          {data?.population.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {data?.region}
        </p>
        <p>
          <span className="font-semibold">Sub region:</span> {data?.subregion}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {data?.capital}
        </p>
        <p>
          <span className="font-semibold">Currencies:</span>{' '}
          {getCurrencies().join(', ')}
        </p>
        <p>
          <span className="font-semibold">Languages:</span>{' '}
          {getLanguages().join(', ')}
        </p>
        <p>
          <span className="font-semibold">Borders:</span>{' '}
          {/* biome-ignore lint/style/noNonNullAssertion: <explanation> */}
          {data!.borders.length > 1 ? (
            <>
              {data?.borders.map((border, index) => (
                <Button
                  key={index}
                  variant={'outline'}
                  size={'sm'}
                  className="mr-3"
                  asChild
                >
                  <Link to={`/countries/${border.toLowerCase()}`} key={index}>
                    {border}
                  </Link>
                </Button>
              ))}
            </>
          ) : (
            'This country does not share borders with any other country.'
          )}
        </p>
      </div>
    </div>
  )
}
