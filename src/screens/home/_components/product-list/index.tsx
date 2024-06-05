import CategoryList from './category-list'
import { ListHeader } from './header'

export default function ProductList() {
  return (
    <div className="mb-32 mt-16">
      <ListHeader />
      <CategoryList />
    </div>
  )
}
