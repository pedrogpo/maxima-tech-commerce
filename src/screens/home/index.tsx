import { Container } from '~/_components/atoms'
import Banner from './_components/banner'
import ProductList from './_components/product-list'

export default async function HomeScreen() {
  return (
    <Container>
      <Banner />
      {await ProductList()}
    </Container>
  )
}
