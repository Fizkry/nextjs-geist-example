"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, LayoutDashboard, Package, Calendar, ClipboardList, Users, Settings, LogOut } from "lucide-react"
import { useAuth } from "@/hooks/useAuth"

const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Data Stock",
    href: "/stock",
    icon: Package,
    submenu: [
      { title: "Raw Material", href: "/stock/raw-material" },
      { title: "Barang Setengah Jadi", href: "/stock/semi-finished" },
      { title: "Finish Good", href: "/stock/finished" },
      { title: "Consumable", href: "/stock/consumable" },
    ],
  },
  {
    title: "Planning Produksi",
    href: "/planning",
    icon: Calendar,
  },
  {
    title: "Production Result",
    href: "/production",
    icon: ClipboardList,
  },
  {
    title: "User Management",
    href: "/users",
    icon: Users,
  },
  {
    title: "Pengaturan",
    href: "/settings",
    icon: Settings,
  },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()
  const { logout } = useAuth()

  const toggleSidebar = () => setCollapsed(!collapsed)
  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <div className={cn(
      "flex flex-col h-screen bg-gray-900 text-white transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        {!collapsed && <h1 className="text-xl font-bold">Inventory</h1>}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="text-white hover:bg-gray-800"
        >
          {collapsed ? <ChevronRight /> : <ChevronLeft />}
        </Button>
      </div>

      <nav className="flex-1 overflow-y-auto">
        <ul className="p-2 space-y-1">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg transition-colors",
                  pathname === item.href ? "bg-gray-800" : "hover:bg-gray-800",
                  collapsed ? "justify-center" : "justify-between"
                )}
                onClick={() => item.submenu && toggleSubmenu(item.title)}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5" />
                  {!collapsed && <span>{item.title}</span>}
                </div>
                {!collapsed && item.submenu && (
                  <ChevronRight className={cn(
                    "w-4 h-4 transition-transform",
                    openSubmenu === item.title && "transform rotate-90"
                  )} />
                )}
              </Link>
              {!collapsed && item.submenu && openSubmenu === item.title && (
                <ul className="mt-1 ml-6 space-y-1">
                  {item.submenu.map((subitem) => (
                    <li key={subitem.href}>
                      <Link
                        href={subitem.href}
                        className={cn(
                          "block px-4 py-2 rounded-lg transition-colors",
                          pathname === subitem.href ? "bg-gray-800" : "hover:bg-gray-800"
                        )}
                      >
                        {subitem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <Button
          variant="ghost"
          className={cn(
            "w-full text-white hover:bg-gray-800",
            collapsed ? "justify-center" : "justify-start"
          )}
          onClick={logout}
        >
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </Button>
      </div>
    </div>
  )
}
