import Link from 'next/link'
import { Button } from '~/_components/ui/button'

interface IErrorScreen {
  title: string
  message: string
}

export default function ErrorScreen({ title, message }: IErrorScreen) {
  return (
    <div className="flex h-[calc(100vh-125px)] flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
      <p className="mb-4 text-lg text-gray-600">{message}</p>
      <Link href="/">
        <Button variant="default">Voltar para o início</Button>
      </Link>
    </div>
  )
}
