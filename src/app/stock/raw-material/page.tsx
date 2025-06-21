"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { StockTable } from "@/components/stock-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card } from "@/components/ui/card"

// Dummy data - replace with actual API data in production
const rawMaterialData = [
  {
    id: "1",
    code: "RM001",
    name: "Steel Sheet",
    category: "Raw Material",
    currentStock: 1500,
    minimumStock: 1000,
    maximumStock: 3000,
    unit: "kg",
    lastUpdated: "2024-02-20",
  },
  {
    id: "2",
    code: "RM002",
    name: "Aluminum Rod",
    category: "Raw Material",
    currentStock: 800,
    minimumStock: 500,
    maximumStock: 1500,
    unit: "pcs",
    lastUpdated: "2024-02-19",
  },
  {
    id: "3",
    code: "RM003",
    name: "Copper Wire",
    category: "Raw Material",
    currentStock: 2000,
    minimumStock: 1500,
    maximumStock: 4000,
    unit: "m",
    lastUpdated: "2024-02-18",
  },
]

export default function RawMaterialPage() {
  useAuth() // Protect the route
  const [data] = useState(rawMaterialData)

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
        <h1 className="text-2xl font-bold">Raw Material Stock</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New Material
        </Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold">Stock List</h2>
              <p className="text-sm text-gray-500">
                Manage your raw material inventory
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
