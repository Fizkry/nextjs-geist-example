"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Edit, Trash2 } from "lucide-react"

// Dummy data - replace with actual API data in production
const productionData = [
  {
    id: "1",
    date: "2024-02-20",
    plan: "Plan A",
    product: "Product A",
    plannedQty: 1000,
    actualQty: 950,
    status: "Completed",
    notes: "Minor delay due to material shortage",
  },
  {
    id: "2",
    date: "2024-02-21",
    plan: "Plan B",
    product: "Product B",
    plannedQty: 500,
    actualQty: 500,
    status: "Completed",
    notes: "On schedule",
  },
]

export default function ProductionPage() {
  useAuth() // Protect the route
  const [data] = useState(productionData)

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
        <h1 className="text-2xl font-bold">Production Result</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Production Result
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Input Production Result</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="plan">Production Plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="plan-a">Plan A</SelectItem>
                  <SelectItem value="plan-b">Plan B</SelectItem>
                  <SelectItem value="plan-c">Plan C</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="actual-qty">Actual Quantity</Label>
              <Input type="number" id="actual-qty" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="delayed">Delayed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Input id="notes" />
            </div>

            <Button type="submit" className="w-full">
              Save Result
            </Button>
          </form>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Production Results</h2>
              <p className="text-sm text-gray-500">
                View and manage production outcomes
              </p>
            </div>

            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Product</TableHead>
                    <TableHead className="text-right">Planned Qty</TableHead>
                    <TableHead className="text-right">Actual Qty</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Notes</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{new Date(item.date).toLocaleDateString()}</TableCell>
                      <TableCell>{item.plan}</TableCell>
                      <TableCell>{item.product}</TableCell>
                      <TableCell className="text-right">{item.plannedQty}</TableCell>
                      <TableCell className="text-right">{item.actualQty}</TableCell>
                      <TableCell>{item.status}</TableCell>
                      <TableCell>{item.notes}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(item)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(item)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
