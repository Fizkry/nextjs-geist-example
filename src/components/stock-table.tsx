"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"

interface StockItem {
  id: string
  name: string
  code: string
  category: string
  currentStock: number
  minimumStock: number
  maximumStock: number
  unit: string
  lastUpdated: string
}

interface StockTableProps {
  data: StockItem[]
  onEdit?: (item: StockItem) => void
  onDelete?: (item: StockItem) => void
}

export function StockTable({ data, onEdit, onDelete }: StockTableProps) {
  return (
    <div className="border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Code</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Current Stock</TableHead>
            <TableHead className="text-right">Min Stock</TableHead>
            <TableHead className="text-right">Max Stock</TableHead>
            <TableHead>Unit</TableHead>
            <TableHead>Last Updated</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.code}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.category}</TableCell>
              <TableCell className="text-right">{item.currentStock}</TableCell>
              <TableCell className="text-right">{item.minimumStock}</TableCell>
              <TableCell className="text-right">{item.maximumStock}</TableCell>
              <TableCell>{item.unit}</TableCell>
              <TableCell>{new Date(item.lastUpdated).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onEdit?.(item)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete?.(item)}
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
  )
}
