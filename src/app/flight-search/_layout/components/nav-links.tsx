"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { IKind, Icon } from "@/components";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
interface ILinks {
  name: string,
  href: string,
  icon: IKind, // need change
  subRoutes?: Array<ILinks>
}
const links: ILinks[] = [
  {
    name: "Metricas",
    href: "/dashboard/metricas",
    icon: 'chart',
    subRoutes: [
      {
        name: "conversacion agentes",
        href: "/dashboard/metricas/conversacion-agente",
        icon: 'phone'
      },
      {
        name: "conversacion asesor",
        href: "/dashboard/metricas/conversacion-asesor",
        icon: 'ear-phones-alt',
      }
    ]
  },
  {
    name: "Chats",
    href: "/dashboard/chats",
    icon: 'people',
    subRoutes: []
  },
];

export default function NavLinks() {
  const pathname = usePathname()
  const isRouteSelected = (route: string, subRoutes?: Array<ILinks>): boolean => {
    if (pathname === route) return true
    return subRoutes ? subRoutes.some((subRoute) => pathname.startsWith(subRoute.href)) : false
  }

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] text-black grow items-center justify-start gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:p-2 md:px-3",
              {
                "bg-sky-100 text-blue-600": isRouteSelected(link.href, link.subRoutes),
              }
            )}
          >
            <Icon type={link.icon} className='flex items-center justify-center text-black m-2 h-10 cursor-pointer' />
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
