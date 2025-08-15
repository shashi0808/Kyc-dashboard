'use client'

import React, { useState, useEffect } from 'react'
import Sidebar from '@/components/layout/SidebarFixed'
import Navbar from '@/components/layout/Navbar'
import KYCCards from '@/components/dashboard/KYCCards'
import KYCStatusGrid from '@/components/dashboard/KYCStatusGrid'
import ProgressBars from '@/components/dashboard/ProgressBars'
import dynamic from 'next/dynamic'

const BarChart = dynamic(() => import('@/components/dashboard/BarChart'), { 
  ssr: false,
  loading: () => <div className="bg-white rounded-lg shadow-md p-6 mb-8"><div className="animate-pulse bg-gray-200 h-80 rounded"></div></div>
})

const PieChart = dynamic(() => import('@/components/dashboard/PieChart'), { 
  ssr: false,
  loading: () => <div className="bg-white rounded-lg shadow-md p-6 mb-8"><div className="animate-pulse bg-gray-200 h-80 rounded"></div></div>
})

import PANStats from '@/components/dashboard/PANStats'
import TabSwitcher from '@/components/dashboard/TabSwitcher'
import { DashboardSkeleton } from '@/components/ui/LoadingSkeleton'
import { TimeRange, ViewType, DashboardData } from '@/lib/types'

export default function OldDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [timeRange, setTimeRange] = useState<TimeRange>('Today')
  const [viewType, setViewType] = useState<ViewType>('Individual')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <Navbar />
          <main className="p-6">
            <DashboardSkeleton />
          </main>
        </div>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 lg:ml-64">
          <Navbar />
          <main className="p-6">
            <div className="text-center py-12">
              <p className="text-gray-600">Failed to load dashboard data.</p>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 lg:ml-64 flex flex-col">
        <Navbar />
        
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Tab Switcher */}
            <TabSwitcher
              timeRange={timeRange}
              viewType={viewType}
              onTimeRangeChange={setTimeRange}
              onViewTypeChange={setViewType}
            />

            {/* KYC Overview Cards */}
            <KYCCards cards={data.kycCards} />

            {/* Bar Chart */}
            <BarChart data={data.chartData} />

            {/* KYC Status Grid */}
            <KYCStatusGrid statuses={data.kycStatuses} />

            {/* Progress Bars */}
            <ProgressBars
              individualData={data.progressData.individual}
              nonIndividualData={data.progressData.nonIndividual}
            />

            {/* PAN Charts and Stats */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
              <PieChart data={data.panData} />
              <div>
                <PANStats stats={data.panStats} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}