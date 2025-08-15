'use client'

import React from 'react'
import SidebarNew from '@/components/layout/SidebarNew'
import HeaderNew from '@/components/layout/HeaderNew'
import DashboardNew from '@/components/dashboard/DashboardNew'

export default function NewDashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarNew />
      
      <div className="flex-1 lg:ml-64 flex flex-col">
        <HeaderNew />
        <DashboardNew />
      </div>
    </div>
  )
}