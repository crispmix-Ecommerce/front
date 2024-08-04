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
import { useTranslations } from 'next-intl';

export function NavigationSubMenu() {
  const t = useTranslations('Header.navigationSubmenu');

  const aditivosComponents = [
    {
      title: t('additive.waterBased.title'),
      href: "/product-list?category=Aditivos&subCategory=Base d'água",
      description: t('additive.waterBased.description'),
    },
    {
      title: t('additive.plastisol.title'),
      href: '/product-list?category=Aditivos&subCategory=Plastisol',
      description: t('additive.plastisol.description'),
    },
    {
      title: t('additive.promotion.title'),
      href: '/aditivos/promocao',
      description: t('additive.promotion.description'),
    },
    {
      title: t('additive.all.title'),
      href: '/product-list?category=Aditivos',
      description: t('additive.all.description'),
    },
  ];

  const pigmentosComponents = [
    {
      title: t('pigments.waterBased.title'),
      href: "/product-list?category=Pigmentos&subCategory=Base d'água",
      description: t('pigments.waterBased.description'),
    },
    {
      title: t('pigments.plastisol.title'),
      href: '/product-list?category=Pigmentos&subCategory=Plastisol',
      description: t('pigments.plastisol.description'),
    },
    {
      title: t('pigments.promotion.title'),
      href: '/pigments/promocao',
      description: t('pigments.promotion.description'),
    },
    {
      title: t('pigments.all.title'),
      href: '/product-list?category=Pigmentos',
      description: t('pigments.all.description'),
    },
  ];

  const tintasComponents = [
    {
      title: t('paints.waterBased.title'),
      href: "/product-list?category=Tintas&subCategory=Base d'água",
      description: t('paints.waterBased.description'),
    },
    {
      title: t('paints.plastisol.title'),
      href: '/product-list?category=Tintas&subCategory=Plastisol',
      description: t('paints.plastisol.description'),
    },
    {
      title: t('paints.promotion.title'),
      href: '/aditivos/promocao',
      description: t('paints.promotion.description'),
    },
    {
      title: t('paints.all.title'),
      href: '/product-list?category=Tintas',
      description: t('paints.all.description'),
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
                <p className="text-xs sm:text-base">{t('additive.title')}</p>
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
                <p className="text-xs sm:text-base">{t('pigments.title')}</p>
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
                <p className="text-xs sm:text-base">{t('paints.title')}</p>
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
