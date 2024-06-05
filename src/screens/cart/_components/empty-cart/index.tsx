import Link from 'next/link'
import { Container } from '~/_components/atoms'
import { Button } from '~/_components/ui/button'

export function EmptyCart() {
  return (
    <div className="mb-32 mt-16">
      <Container>
        <div className="flex h-[300px] flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-bold text-gray-900">Carrinho vazio</h1>
          <p className="mb-4 text-lg font-medium text-gray-700">
            Adicione produtos ao carrinho para continuar
          </p>
          <Link href="/">
            <Button variant="default" size="lg">
              Voltar para o início
            </Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
