'use client'

import React from 'react'
import { Search, Bell, ChevronDown } from 'lucide-react'

export default function HeaderNew() {
  return (
    <header className="bg-white border-b border-gray-100 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center space-x-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          
          {/* Search bar */}
          <div className="relative flex items-center">
            <Search size={16} className="absolute left-4 text-gray-400 z-10 pointer-events-none" />
            <input
              type="text"
              placeholder="Search team members..."
              className="pl-12 pr-4 py-3 w-64 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-gray-700">
            <Bell size={20} />
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">S</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900">Shashi</div>
                <div className="text-xs text-gray-500">May 18, 2024</div>
              </div>
              <ChevronDown size={16} className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}