import { Fragment } from 'react'
import {
  Breadcrumb as BreadcrumbCN,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '~/_components/ui/breadcrumb'

interface IBreadcrumbItem {
  label: string
  href?: string
}

interface IBreadcrumb {
  items: IBreadcrumbItem[]
}

export function Breadcrumb({ items }: IBreadcrumb) {
  return (
    <BreadcrumbCN>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          if (isLast) {
            return <BreadcrumbPage key={index}>{item.label}</BreadcrumbPage>
          }
          return (
            <Fragment key={index}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </Fragment>
          )
        })}
      </BreadcrumbList>
    </BreadcrumbCN>
  )
}
