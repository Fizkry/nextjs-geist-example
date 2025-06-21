"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Plus, Edit, Trash2, Lock } from "lucide-react"

// Dummy data - replace with actual API data in production
const userData = [
  {
    id: "1",
    username: "john.doe",
    fullName: "John Doe",
    role: "Admin",
    email: "john.doe@example.com",
    status: "Active",
    permissions: ["dashboard", "stock", "planning", "production", "users", "settings"],
  },
  {
    id: "2",
    username: "jane.smith",
    fullName: "Jane Smith",
    role: "Manager",
    email: "jane.smith@example.com",
    status: "Active",
    permissions: ["dashboard", "stock", "planning", "production"],
  },
]

const availablePermissions = [
  { id: "dashboard", label: "Dashboard Access" },
  { id: "stock", label: "Stock Management" },
  { id: "planning", label: "Production Planning" },
  { id: "production", label: "Production Results" },
  { id: "users", label: "User Management" },
  { id: "settings", label: "Settings" },
]

export default function UsersPage() {
  useAuth() // Protect the route
  const [data] = useState(userData)

  const handleEdit = (item: any) => {
    console.log("Edit user:", item)
    // Implement edit functionality
  }

  const handleDelete = (item: any) => {
    console.log("Delete user:", item)
    // Implement delete functionality
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Management</h1>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add New User
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="p-6 lg:col-span-1">
          <h2 className="text-lg font-semibold mb-4">Add/Edit User</h2>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Permissions</Label>
              <div className="grid grid-cols-1 gap-2 mt-2">
                {availablePermissions.map((permission) => (
                  <div key={permission.id} className="flex items-center space-x-2">
                    <Checkbox id={permission.id} />
                    <Label htmlFor={permission.id}>{permission.label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Button type="submit" className="w-full">
              Save User
            </Button>
          </form>
        </Card>

        <Card className="p-6 lg:col-span-2">
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">User List</h2>
              <p className="text-sm text-gray-500">
                Manage system users and their permissions
              </p>
            </div>

            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Full Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.username}</TableCell>
                      <TableCell>{user.fullName}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.status}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleEdit(user)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(user)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => console.log("Reset password:", user)}
                          >
                            <Lock className="h-4 w-4" />
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
