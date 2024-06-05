import { ReactNode } from 'react'

interface IContainer {
  children: ReactNode
}

export function Container({ children }: IContainer) {
  return <div className="mx-auto mt-12 max-w-[1440px] px-8">{children}</div>
}
