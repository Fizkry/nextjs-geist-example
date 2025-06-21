"use client"

import { useAuth } from "@/hooks/useAuth"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Package } from "lucide-react"

const stockCategories = [
  {
    title: "Raw Material",
    href: "/stock/raw-material",
    description: "Manage raw materials and their inventory levels",
    count: 25,
  },
  {
    title: "Semi-Finished Goods",
    href: "/stock/semi-finished",
    description: "Track work-in-progress and semi-finished products",
    count: 15,
  },
  {
    title: "Finished Goods",
    href: "/stock/finished",
    description: "Monitor completed products ready for distribution",
    count: 30,
  },
  {
    title: "Consumables",
    href: "/stock/consumable",
    description: "Track consumable items and supplies",
    count: 40,
  },
]

export default function StockPage() {
  useAuth() // Protect the route

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Stock Management</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stockCategories.map((category) => (
          <Card key={category.href} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold">{category.title}</h2>
                <p className="text-sm text-gray-500">{category.description}</p>
                <div className="flex items-center gap-2 text-sm">
                  <Package className="w-4 h-4" />
                  <span>{category.count} items</span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button asChild className="w-full">
                <Link href={category.href}>View Items</Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
