'use client'
import { Logo } from '~/_components/atoms/logo'
import { BiMenu, BiSearchAlt, BiShoppingBag, BiUser } from 'react-icons/bi'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu'

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/_components/ui/sheet'
import { Button } from '~/_components/ui/button'
import { Input } from '~/_components/atoms'
import { navbarItems } from './navItems'
import { usePathname } from 'next/navigation'

function MobileButton() {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger>
        <Button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          variant="ghost"
          aria-label="Minha conta"
        >
          <span className="sr-only">Open main menu</span>
          <BiMenu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mb-8">
            <Logo />
          </SheetTitle>
          <div>
            {navbarItems.map((item, index) => (
              <Button
                key={index}
                variant={pathName === item.href ? 'default' : 'ghost'}
                className="w-full text-left"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export function Navbar() {
  return (
    <div className="flex h-[125px] w-full items-center justify-between border-b border-b-gray-500 px-16">
      <Logo />
      <MobileButton />
      <div className={'hidden items-center gap-5 md:flex'} id="navbar-default">
        <Input
          startIcon={<BiSearchAlt size={24} />}
          placeholder="Pesquisar por um produto"
        />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" aria-label="Minha conta">
              <BiUser size={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Perfil</DropdownMenuItem>
            <DropdownMenuItem>Compras</DropdownMenuItem>
            <DropdownMenuItem>Carrinho</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" aria-label="Carrinho">
          <BiShoppingBag size={24} />
        </Button>
      </div>
    </div>
  )
}
