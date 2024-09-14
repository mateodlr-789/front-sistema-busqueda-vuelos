"use client";

import LayoutDashboard from './_layout/layout-dashboard'

interface Props {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <LayoutDashboard> {children} </LayoutDashboard>
}
