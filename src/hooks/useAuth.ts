"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export function useAuth() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const user = localStorage.getItem("user")
    const isLoginPage = pathname === "/"

    if (!user && !isLoginPage) {
      router.push("/")
    } else if (user && isLoginPage) {
      router.push("/dashboard")
    }
  }, [router, pathname])

  const logout = () => {
    localStorage.removeItem("user")
    router.push("/")
  }

  return { logout }
}
