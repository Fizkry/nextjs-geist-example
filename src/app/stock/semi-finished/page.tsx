"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { StockTable } from "@/components/stock-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card } from "@/components/ui/card"

// Dummy data - replace with actual API data in production
const semiFinishedData = [
  {
    id: "1",
    code: "SF001",
    name: "Assembled Frame",
    category: "Semi-Finished",
    currentStock: 50,
    minimumStock: 30,
    maximumStock: 100,
    unit: "pcs",
    lastUpdated: "2024-02-20",
  },
  {
    id: "2",
    code: "SF002",
    name: "Painted Panel",
    category: "Semi-Finished",
    currentStock: 75,
    minimumStock: 50,
    maximumStock: 150,
    unit: "pcs",
    lastUpdated: "2024-02-19",
  },
  {
    id: "3",
    code: "SF003",
    name: "Circuit Board",
    category: "Semi-Finished",
    currentStock: 120,
    minimumStock: 80,
    maximumStock: 200,
    unit: "pcs",
    lastUpdated: "2024-02-18",
  },
]

export default function SemiFinishedPage() {
  useAuth() // Protect the route
  const [data] = useState(semiFinishedData)

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
        <h1 className="text-2xl font-bold">Semi-Finished Goods Stock</h1>
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
                Manage your semi-finished goods inventory
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
