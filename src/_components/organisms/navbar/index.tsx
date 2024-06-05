import { Logo } from '~/_components/atoms/logo'
import { BiSearchAlt } from 'react-icons/bi'

import { Input } from '~/_components/atoms'

import Link from 'next/link'
import { MobileButton } from './mobile-button'
import { ProfileButton } from './profile-button'
import { ShoppingBag } from './shopping-bag'

export function Navbar() {
  return (
    <div className="flex h-[125px] w-full items-center justify-between border-b border-b-gray-500 px-8">
      <Link href="/">
        <Logo />
      </Link>
      <MobileButton />
      <div className="hidden items-center gap-5 md:flex">
        <Input
          startIcon={<BiSearchAlt size={24} />}
          placeholder="Pesquisar por um produto"
        />
        <ProfileButton />
        <ShoppingBag />
      </div>
    </div>
  )
}
