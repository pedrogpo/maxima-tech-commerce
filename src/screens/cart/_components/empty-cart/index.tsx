import Link from 'next/link'
import { Container } from '~/_components/atoms'
import { Button } from '~/_components/ui/button'

export function EmptyCart() {
  return (
    <div className="mt-16 min-h-[calc(100vh-125px-4rem)]">
      <Container>
        <div className="flex h-[300px] flex-col items-center justify-center gap-2 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Carrinho vazio</h1>
          <p
            data-testid="empty-cart-message"
            className="mb-4 text-lg font-medium text-gray-700"
          >
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
