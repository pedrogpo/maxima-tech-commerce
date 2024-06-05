export default function Banner() {
  return (
    <div className="bg-hero-banner mt-16 flex h-auto w-full items-center justify-center rounded-xl bg-cover bg-center px-2 py-32 md:py-60">
      <div className="flex max-w-[620px] flex-col gap-6 text-center">
        <h1 className="text-7xl font-bold uppercase text-gray-100">
          Black friday
        </h1>
        <p className="text-2xl font-normal text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          tempor enim id luctus.
        </p>
      </div>
    </div>
  )
}
