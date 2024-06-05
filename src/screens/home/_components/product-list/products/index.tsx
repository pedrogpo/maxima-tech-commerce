import Image from 'next/image'
import { Button } from '~/_components/ui/button'

function ProductCard() {
  return (
    <div className="flex flex-col rounded-lg bg-gray-100 shadow-xl">
      <Image
        src="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-1.jpg"
        width={440}
        height={360}
        alt="Product"
        className="rounded-t-lg"
      />
      <div className="flex flex-col justify-center gap-6 p-6">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Tênis futurista</h3>
            <p className="text-base font-medium text-gray-800">Tênis</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-xl font-black text-gray-900">R$ 120,00</p>
            <span className="text-base font-normal text-gray-800 line-through">
              R$ 120,00
            </span>
          </div>
        </div>
        <Button className="py-5" variant="default">
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  )
}

export default async function Products() {
  return (
    <div className="mt-16 grid grid-cols-4 gap-4">
      <ProductCard />
    </div>
  )
}
