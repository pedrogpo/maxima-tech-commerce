'use client'
import { BiUser } from 'react-icons/bi'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/_components/ui/dropdown-menu'

export function ProfileButton() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger aria-label="Minha conta">
        <BiUser size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Minha conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Perfil</DropdownMenuItem>
        <DropdownMenuItem>Compras</DropdownMenuItem>
        <DropdownMenuItem>Carrinho</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
