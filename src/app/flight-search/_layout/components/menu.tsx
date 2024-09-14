import Link from "next/link";

import NavLinks from "./nav-links";
import { Dropdown, IDropdownItem, Icon } from "@/components";

export default function Menu() {
  const options: IDropdownItem[] = [
    {
      name: "Otro menu",
      icon: "ear-phones-alt",
      onClick: () => console.log("salir"),
    },
    {
      name: "Salir",
      icon: "ear-phones-alt",
      onClick: () => console.log("salir"),
    },
  ]

  return (
    <div className="flex flex-col w-fit h-screen bg-white border-2 py-4 px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md border-2 bg-white p-4 md:h-40"
        href="/"
      >
        <p className="w-32 text-black md:w-40">falta logo</p>
      </Link>

      <div className="flex grow justify-between space-x-2 flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
        <div className="flex h-[48px] grow items-end w-full text-sm font-medium flex-row p-2 px-3">
          <Dropdown
            options={options}
            classMenuItems="bottom-0 mb-20"
            classMenu="w-full"
            classButton="flex flex-row justify-center p-3 gap-2 border-2 rounded-md"
          >
            <Icon type="wrench" className="text-black" />
            <p className="text-black">configuración</p>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
