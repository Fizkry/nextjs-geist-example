"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { StockTable } from "@/components/stock-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card } from "@/components/ui/card"

// Dummy data - replace with actual API data in production
const consumableData = [
  {
    id: "1",
    code: "CS001",
    name: "Lubricating Oil",
    category: "Consumable",
    currentStock: 500,
    minimumStock: 200,
    maximumStock: 1000,
    unit: "liters",
    lastUpdated: "2024-02-20",
  },
  {
    id: "2",
    code: "CS002",
    name: "Cleaning Solution",
    category: "Consumable",
    currentStock: 300,
    minimumStock: 150,
    maximumStock: 600,
    unit: "liters",
    lastUpdated: "2024-02-19",
  },
  {
    id: "3",
    code: "CS003",
    name: "Safety Gloves",
    category: "Consumable",
    currentStock: 1000,
    minimumStock: 500,
    maximumStock: 2000,
    unit: "pairs",
    lastUpdated: "2024-02-18",
  },
  {
    id: "4",
    code: "CS004",
    name: "Welding Rods",
    category: "Consumable",
    currentStock: 2500,
    minimumStock: 1000,
    maximumStock: 5000,
    unit: "pcs",
    lastUpdated: "2024-02-17",
  },
]

export default function ConsumablePage() {
  useAuth() // Protect the route
  const [data] = useState(consumableData)

  const handleEdit = (item: any) => {
    console.log("Edit item:", item)
    // Implement edit functionality
  }

  const handleDelete = (item: any) => {
    console.log("Delete item:", item)
    // Implement delete functionality
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Consumable Stock</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Item
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Stock List</h2>
              <p className="text-sm text-gray-500">
                Manage your consumable items inventory
              </p>
            </div>
          </div>

          <StockTable
            data={data}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </Card>
    </div>
  )
}
