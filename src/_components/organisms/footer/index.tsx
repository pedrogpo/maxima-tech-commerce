'use client'
import { Logo } from '~/_components/atoms/logo'

export function Footer() {
  return (
    <div className="flex h-[125px] w-full items-center justify-between border-t border-t-gray-500 px-16">
      <Logo />
      <p className="text-sm text-gray-500">© 2024 Ecommerce</p>
    </div>
  )
}
