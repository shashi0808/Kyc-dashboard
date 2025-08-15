'use client'

import React from 'react'
import { Search, Bell, ChevronRight } from 'lucide-react'
import { formatDate } from '@/lib/utils'
import DarkModeToggle from '@/components/ui/DarkModeToggle'

export default function Navbar() {
  const currentDate = new Date()

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Home</span>
          <ChevronRight size={16} />
          <span className="text-gray-900 font-medium">Dashboard</span>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Dark Mode Toggle */}
          <DarkModeToggle />

          {/* Notification */}
          <button className="relative p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile Section */}
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">John Doe</div>
              <div className="text-xs text-gray-500">{formatDate(currentDate)}</div>
            </div>
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">JD</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}