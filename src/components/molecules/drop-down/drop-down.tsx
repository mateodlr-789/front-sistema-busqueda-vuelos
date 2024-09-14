import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { Icon } from "@/components";
import { IDropdown } from "./types-drop-down";
import clsx from "clsx";

export default function Dropdown({
  children,
  classMenuItems,
  classButton,
  classMenu,
  options,
}: IDropdown): JSX.Element {
  return (
    <>
      <Menu as="div" className={clsx("inline-block text-left", classMenu)}>
        <div>
          <Menu.Button
            className={clsx(
              "inline-flex w-full text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
              classButton
            )}
          >
            {children}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={clsx(
              "absolute w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none",
              classMenuItems ?? "right-0 mt-2"
            )}
          >
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <>
                    {options.map((option) => {
                      return (
                        <div
                          key={option.name}
                          onClick={option.onClick}
                          className={`${
                            active ? "bg-blue-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <Icon className="mr-2 h-5 w-5" type={option.icon} />
                          <p className="text-black">{option.name}</p>
                        </div>
                      );
                    })}
                  </>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
