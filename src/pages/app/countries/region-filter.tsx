import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { type MouseEvent, useState } from 'react'
import { useSearchParams } from 'react-router'

export function RegionFilter() {
  const [, setSearchParams] = useSearchParams()
  const [key, setKey] = useState(+new Date())
  const [value, setValue] = useState<string | undefined>(undefined)

  function handleSelectChange(value: string) {
    setSearchParams(prev => {
      prev.set('region', value)
      return prev
    })
  }

  function handleSelectClear(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation()
    setKey(+new Date())
    setValue(undefined)
    setSearchParams(prev => {
      prev.delete('region')
      return prev
    })
  }

  return (
    <Select key={key} value={value} onValueChange={handleSelectChange}>
      <SelectTrigger className="w-full sm:w-48">
        <SelectValue placeholder="Filter by region..." />
      </SelectTrigger>
      <SelectContent>
        <Button
          variant="secondary"
          size="sm"
          className="w-full h-8"
          onClick={handleSelectClear}
        >
          Clear
        </Button>
        <SelectSeparator />
        <SelectItem value="africa">Africa</SelectItem>
        <SelectItem value="america">América</SelectItem>
        <SelectItem value="asia">Ásia</SelectItem>
        <SelectItem value="europe">Europe</SelectItem>
        <SelectItem value="oceania">Oceania</SelectItem>
      </SelectContent>
    </Select>
  )
}
