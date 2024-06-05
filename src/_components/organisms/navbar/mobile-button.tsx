'use client'
import Link from 'next/link'
import { navbarItems } from './navItems'
import { usePathname } from 'next/navigation'
import { BiMenu } from 'react-icons/bi'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '~/_components/ui/sheet'
import { Logo } from '~/_components/atoms'
import { Button } from '~/_components/ui/button'

export function MobileButton() {
  const pathName = usePathname()

  return (
    <Sheet>
      <SheetTrigger
        aria-label="Minha conta"
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      >
        <span className="sr-only">Abrir menu</span>
        <BiMenu size={24} />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="mb-8">
            <Link href="/">
              <Logo />
            </Link>
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
