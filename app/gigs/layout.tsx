import type React from "react"
import SidebarLayout from "@/components/layouts/sidebar-layout"

export default function GigsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <SidebarLayout>{children}</SidebarLayout>
}
