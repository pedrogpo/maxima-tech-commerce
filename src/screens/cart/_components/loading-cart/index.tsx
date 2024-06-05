import { BiLoaderAlt } from 'react-icons/bi'

export function LoadingCard() {
  return (
    <div className="mb-16 mt-16">
      <div className="flex h-[300px] items-center justify-center">
        <BiLoaderAlt className="h-16 w-16 animate-spin text-primary" />
      </div>
    </div>
  )
}
