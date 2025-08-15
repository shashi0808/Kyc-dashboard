'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  DollarSign, 
  FileCheck, 
  Bell,
  Menu,
  X,
  BarChart3
} from 'lucide-react'
import { cn } from '@/lib/utils'

const menuItems = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Applications', href: '/applications', icon: FileText },
  { name: 'Billing', href: '/billing', icon: CreditCard },
  { name: 'Rate Card', href: '/rate-card', icon: DollarSign },
  { name: 'Agreement Copy', href: '/agreement', icon: FileCheck },
  { name: 'Notices', href: '/notices', icon: Bell },
]

export default function SidebarNew() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const pathname = usePathname()

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-50 lg:hidden bg-white rounded-lg shadow-md p-2"
        onClick={toggleMobileMenu}
      >
        {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out",
        "lg:translate-x-0 lg:static lg:z-auto",
        isMobileOpen ? "translate-x-0 z-50" : "-translate-x-full z-50"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center px-6 py-6">
            <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
              <BarChart3 size={24} className="text-white" />
            </div>
            <span className="text-sm text-gray-500">Logo</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 mb-1 rounded-lg transition-colors duration-200 text-sm",
                    isActive 
                      ? "bg-blue-50 text-blue-600" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  )}
                  onClick={() => setIsMobileOpen(false)}
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              )
            })}
          </nav>
        </div>
      </aside>
    </>
  )
}