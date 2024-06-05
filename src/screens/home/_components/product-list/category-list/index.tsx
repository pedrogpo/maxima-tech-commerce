import Image from 'next/image'

interface ICategoryBox {
  title: string
  image: string
}

function CategoryBox({ title, image }: ICategoryBox) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Image
        src={image}
        width={100}
        height={100}
        alt={title}
        className="h-[100px] min-h-[100px] w-[100px] min-w-[100px] rounded-full object-cover"
      />
      <span className="text-xl font-bold text-gray-900">{title}</span>
    </div>
  )
}

export default function CategoryList() {
  return (
    <div className="mt-12 flex flex-wrap items-center gap-8">
      <CategoryBox
        image="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/shoes/shoes-1.jpg"
        title="Tênis"
      />
      <CategoryBox
        image="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/tshirts/tshirt-1.jpg"
        title="Camisetas"
      />
      <CategoryBox
        image="https://s3-sa-east-1.amazonaws.com/prod-superon-public-media/prova-frontend/pants/pant-1.jpg"
        title="Calças"
      />
    </div>
  )
}
