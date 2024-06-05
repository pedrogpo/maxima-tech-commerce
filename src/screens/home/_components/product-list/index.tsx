import CategoryList from './category-list'
import { ListHeader } from './header'
import Products from './products'

export default async function ProductList() {
  return (
    <div className="mb-32 mt-16">
      <ListHeader />
      <CategoryList />
      {await Products()}
    </div>
  )
}
