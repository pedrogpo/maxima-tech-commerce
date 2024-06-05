import { ReactNode } from 'react'

interface IContainer {
  children: ReactNode
}

export function Container({ children }: IContainer) {
  return <div className="mx-auto max-w-[1790px] px-8">{children}</div>
}
