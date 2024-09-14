import { type ReactNode } from "react"

import { IKind } from "@/components"

export interface IDropdownItem {
  onClick: () => void
  name: string
  icon: IKind
}

export interface IDropdown {
  children: ReactNode;
  options: IDropdownItem[]
  classMenu?: string;
  classButton?: string;
  classMenuItems?: string;
}
