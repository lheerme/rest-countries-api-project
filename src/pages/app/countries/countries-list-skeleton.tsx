import { Skeleton } from '@/components/ui/skeleton'

export function CountriesListSkeleton() {
  return (
    <>
      {Array.from({ length: 20 }).map((_, index) => (
        <li
          key={index}
          className="flex flex-col gap-4 w-44 sm:w-64 h-40 sm:h-56 rounded-md px-6 pt-6"
        >
          <Skeleton className="w-full h-3/4" />
          <Skeleton className="w-full h-5 rounded" />
        </li>
      ))}
    </>
  )
}
