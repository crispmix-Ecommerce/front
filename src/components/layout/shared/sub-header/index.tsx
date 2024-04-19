'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { FlaskConical, PaintBucket, Palette } from 'lucide-react';

export function NavigationSubMenu() {
  const aditivosComponents = [
    {
      title: 'A base de água',
      href: "/product-list?category=Aditivos&subCategory=Base d'água",
      description:
        'Explore nossa gama de produtos químicos com foco em soluções à base de água. Descubra compostos, reações e aplicações para atender diversas necessidades industriais e científicas.',
    },
    {
      title: 'Plastisol',
      href: '/product-list?category=Aditivos&subCategory=Plastisol',
      description:
        'Conheça o plastisol, um composto químico versátil usado em revestimentos e materiais flexíveis. Descubra propriedades e usos por meio de uma pré-visualização destacada.',
    },
    {
      title: 'Promoção',
      href: '/aditivos/promocao',
      description:
        'Acompanhe promoções de produtos químicos com um indicador visual de progresso. Explore ofertas e descontos de forma informativa e interativa.',
    },
    {
      title: 'Todos',
      href: '/product-list?category=Aditivos',
      description:
        'Explore nossa lista completa de produtos químicos de forma eficiente usando a área de rolagem. Descubra informações sobre diferentes compostos de maneira fácil e rápida.',
    },
  ];

  const pigmentosComponents = [
    {
      title: 'A base de água',
      href: "/product-list?category=Pigmentos&subCategory=Base d'água",
      description:
        'Explore nossa gama de produtos químicos com foco em soluções à base de água. Descubra compostos, reações e aplicações para atender diversas necessidades industriais e científicas.',
    },
    {
      title: 'Plastisol',
      href: '/product-list?category=Pigmentos&subCategory=Plastisol',
      description:
        'Conheça o plastisol, um composto químico versátil usado em revestimentos e materiais flexíveis. Descubra propriedades e usos por meio de uma pré-visualização destacada.',
    },
    {
      title: 'Promoção',
      href: '/pigments/promocao',
      description:
        'Acompanhe promoções de produtos químicos com um indicador visual de progresso. Explore ofertas e descontos de forma informativa e interativa.',
    },
    {
      title: 'Todos',
      href: '/product-list?category=Pigmentos',
      description:
        'Explore nossa lista completa de produtos químicos de forma eficiente usando a área de rolagem. Descubra informações sobre diferentes compostos de maneira fácil e rápida.',
    },
  ];

  const tintasComponents = [
    {
      title: 'A base de água',
      href: "/product-list?category=Tintas&subCategory=Base d'água",
      description:
        'Explore nossa gama de produtos químicos com foco em soluções à base de água. Descubra compostos, reações e aplicações para atender diversas necessidades industriais e científicas.',
    },
    {
      title: 'Plastisol',
      href: '/product-list?category=Tintas&subCategory=Plastisol',
      description:
        'Conheça o plastisol, um composto químico versátil usado em revestimentos e materiais flexíveis. Descubra propriedades e usos por meio de uma pré-visualização destacada.',
    },
    {
      title: 'Promoção',
      href: '/aditivos/promocao',
      description:
        'Acompanhe promoções de produtos químicos com um indicador visual de progresso. Explore ofertas e descontos de forma informativa e interativa.',
    },
    {
      title: 'Todos',
      href: '/product-list?category=Tintas',
      description:
        'Explore nossa lista completa de produtos químicos de forma eficiente usando a área de rolagem. Descubra informações sobre diferentes compostos de maneira fácil e rápida.',
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex justify-center">
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-custom-green">
            <div className="flex items-end gap-1 cursor-pointer">
              <div className="flex flex-col items-center">
                <FlaskConical size={20} />
              </div>
              <span>
                <p className="text-xs sm:text-base">Aditivos</p>
              </span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[360px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {aditivosComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-custom-pink">
            <div className="flex items-end gap-1 cursor-pointer">
              <div className="flex flex-col items-center">
                <Palette size={20} />
              </div>
              <span>
                <p className="text-xs sm:text-base">Pigmentos</p>
              </span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[360] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {pigmentosComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-custom-yellow">
            <div className="flex items-end gap-1 cursor-pointer">
              <div className="flex flex-col items-center">
                <PaintBucket size={20} />
              </div>
              <span>
                <p className="text-xs sm:text-base">Tintas</p>
              </span>
            </div>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[360] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {tintasComponents.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
