import { BiLoaderAlt } from 'react-icons/bi'

export function LoadingCard() {
  return (
    <div className="mt-16 min-h-[calc(100vh-125px-4rem)]">
      <div className="flex h-[300px] items-center justify-center">
        <BiLoaderAlt className="h-16 w-16 animate-spin text-primary" />
      </div>
    </div>
  )
}
