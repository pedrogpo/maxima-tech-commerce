import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-center gap-5">
      <Image
        className="min-h-[42px] min-w-[200px]"
        src={'/img/logo/default.png'}
        width={200}
        height={42}
        alt="Logo Maximatech"
      />
    </div>
  )
}
