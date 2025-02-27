import { Skeleton } from '@/components/ui/skeleton'

export function CountryDetailSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full max-w-[500px] mx-auto h-80" />
      <Skeleton className="w-full max-w-96 h-8 mx-auto" />
      <Skeleton className="w-full max-w-80 h-4 mx-auto" />
      <Skeleton className="w-full max-w-52 h-4 mt-2" />
      <Skeleton className="w-full max-w-40 h-4" />
      <Skeleton className="w-full max-w-56 h-4" />
      <Skeleton className="w-full max-w-36 h-4" />
      <Skeleton className="w-full max-w-52 h-4" />
      <Skeleton className="w-full max-w-52 h-4" />
      <Skeleton className="w-full max-w-96 h-10" />
    </div>
  )
}
