import { Input } from '@/components/ui/input'
import { useDebounce } from '@/hooks/use-debounce'
import { Search } from 'lucide-react'
import { type ChangeEvent, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router'

export function CountrySearchBar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [inputValue, setInputValue] = useState(searchParams.get('query') ?? '')
  const debounceSearch = useDebounce(inputValue)

  function handleSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  useEffect(() => {
    if (debounceSearch) {
      if (debounceSearch.trim().length === 0) return

      setSearchParams(prev => {
        prev.set('query', debounceSearch.trim())
        return prev
      })
    } else {
      setSearchParams(prev => {
        prev.delete('query')
        return prev
      })
    }
  }, [debounceSearch, setSearchParams])

  return (
    <div className="flex items-center gap-2 w-full">
      <label htmlFor="search">
        <Search />
      </label>
      <Input
        id="search"
        type="text"
        placeholder="Search country..."
        className="w-full sm:max-w-96"
        value={inputValue}
        onChange={handleSearchInputChange}
      />
    </div>
  )
}
