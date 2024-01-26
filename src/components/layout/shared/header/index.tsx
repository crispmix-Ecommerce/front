'use client'
import {
  NavigationListItem,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { Search, ShoppingCart } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const components: { title: string; href: string; description: string }[] = [
    {
      title: 'Alert Dialog',
      href: '/docs/primitives/alert-dialog',
      description:
        'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
      title: 'Hover Card',
      href: '/docs/primitives/hover-card',
      description:
        'For sighted users to preview content available behind a link.',
    },
    {
      title: 'Progress',
      href: '/docs/primitives/progress',
      description:
        'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
  ]

  return (
    <div className="w-full flex flex-col">
      <div className="w-full bg-custom-gray">
        <div className="container p-2 pb-4">
          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
            <Image
              src="/logo.png"
              alt="Logo crispmix"
              width={150}
              height={150}
            />

            <div className="w-full max-w-[768px] flex justify-center">
              <div className="w-full bg-white py-2 px-4 rounded-lg flex items-center">
                <input
                  type="text"
                  placeholder="Procure seu produto aqui."
                  className="flex-1 outline-none placeholder:text-custom-dark placeholder:text-sm"
                />
                <Search
                  size={18}
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-end gap-1 cursor-pointer">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-blue-300 text-xs flex items-center justify-center text-white">
                  19
                </div>
                <ShoppingCart size={16} />
              </div>
              <span className="font-semibold">Carrinho</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-custom-dark text-white p-2">
        <div className="container flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-white">
                <NavigationMenuTrigger className="bg-transparent text-white">
                  Tintas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <NavigationListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </NavigationListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-white">
                <NavigationMenuTrigger className="bg-transparent text-white">
                  Pigmentos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <NavigationListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </NavigationListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="text-white">
                <NavigationMenuTrigger className="bg-transparent text-white">
                  Aditivos
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {components.map((component) => (
                      <NavigationListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </NavigationListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}
