interface INavbarItems {
  label: string
  href: string
  subItems?: INavbarItems[]
}

export const navbarItems = [
  {
    label: 'Início',
    href: '/',
  },
  {
    label: 'Perfil',
    href: '/perfil',
    subItems: [
      {
        label: 'Minha conta',
        href: '/minha-conta',
      },
      {
        label: 'Perfil',
        href: '/perfil',
      },
      {
        label: 'Compras',
        href: '/compras',
      },
      {
        label: 'Carrinho',
        href: '/carrinho',
      },
    ],
  },
  {
    label: 'Contato',
    href: '/contato',
  },
] as INavbarItems[]
