"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { StockTable } from "@/components/stock-table"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card } from "@/components/ui/card"

// Dummy data - replace with actual API data in production
const finishedGoodsData = [
  {
    id: "1",
    code: "FG001",
    name: "Electric Motor Type A",
    category: "Finished Goods",
    currentStock: 200,
    minimumStock: 100,
    maximumStock: 500,
    unit: "pcs",
    lastUpdated: "2024-02-20",
  },
  {
    id: "2",
    code: "FG002",
    name: "Control Panel Model B",
    category: "Finished Goods",
    currentStock: 150,
    minimumStock: 75,
    maximumStock: 300,
    unit: "pcs",
    lastUpdated: "2024-02-19",
  },
  {
    id: "3",
    code: "FG003",
    name: "Industrial Sensor X",
    category: "Finished Goods",
    currentStock: 300,
    minimumStock: 150,
    maximumStock: 600,
    unit: "pcs",
    lastUpdated: "2024-02-18",
  },
]

export default function FinishedGoodsPage() {
  useAuth() // Protect the route
  const [data] = useState(finishedGoodsData)

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
        <h1 className="text-2xl font-bold">Finished Goods Stock</h1>
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
                Manage your finished goods inventory
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
