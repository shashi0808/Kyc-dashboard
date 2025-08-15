'use client'

import React, { useState, useEffect } from 'react'
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
  X
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

export default function SidebarFixed() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileOpen(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const toggleMobileMenu = () => setIsMobileOpen(!isMobileOpen)

  return (
    <>
      {/* Mobile menu button - only show on mobile */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-[60] bg-white rounded-lg shadow-md p-2 border"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Mobile overlay - only show on mobile when menu is open */}
      {isMobile && isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out",
        // Desktop: always visible
        "lg:translate-x-0 lg:z-30",
        // Mobile: toggle visibility
        isMobile ? (
          isMobileOpen ? "translate-x-0 z-50" : "-translate-x-full z-50"
        ) : "translate-x-0 z-30"
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">KYC Dashboard</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200",
                    isActive 
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  )}
                  onClick={() => isMobile && setIsMobileOpen(false)}
                >
                  <Icon size={20} />
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