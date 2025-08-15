'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { TrendingUp, TrendingDown, Calendar, BarChart3, List } from 'lucide-react'

// Dynamic import for charts to prevent SSR issues
const BarChart = dynamic(() => import('recharts').then(mod => ({ default: mod.BarChart })), { ssr: false })
const Bar = dynamic(() => import('recharts').then(mod => ({ default: mod.Bar })), { ssr: false })
const XAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.XAxis })), { ssr: false })
const YAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.YAxis })), { ssr: false })
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false })
const PieChart = dynamic(() => import('recharts').then(mod => ({ default: mod.PieChart })), { ssr: false })
const Pie = dynamic(() => import('recharts').then(mod => ({ default: mod.Pie })), { ssr: false })
const Cell = dynamic(() => import('recharts').then(mod => ({ default: mod.Cell })), { ssr: false })

// Data exactly matching the UI image from photo
const barChartData = [
  { name: 'Individual', today: 350, yesterday: 300 },
  { name: 'Non Individual', today: 300, yesterday: 250 },
]

const pieChartData = [
  { name: 'No Of PANs Solicited', value: 400, color: '#1E40AF' },
  { name: 'Received', value: 300, color: '#0EA5E9' },
  { name: 'Consumed', value: 200, color: '#10B981' },
  { name: 'Pending', value: 100, color: '#EF4444' },
]

const statusCards = [
  { name: 'KYC Initiated', count: 234, color: 'text-blue-600' },
  { name: 'Under Process', count: 45, color: 'text-orange-500' },
  { name: 'Registered', count: 350, color: 'text-green-600' },
  { name: 'Validated', count: 654, color: 'text-green-600' },
  { name: 'Hold', count: 269, color: 'text-blue-400' },
  { name: 'Docs Pending', count: 100, color: 'text-red-500' },
]

export default function DashboardNew() {
  return (
    <div className="flex-1 bg-gray-50">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-1">Axis MF</h1>
            <div className="flex items-center text-sm text-gray-500">
              <span>Home</span>
              <span className="mx-2">{'>'}</span>
              <span>Dashboard</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex bg-white rounded-lg border border-gray-200">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium">Today</button>
              <button className="px-4 py-2 text-gray-600 text-sm font-medium">This Month</button>
              <button className="px-4 py-2 text-gray-600 text-sm font-medium">Custom</button>
            </div>
            <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 px-3 py-2">
              <Calendar size={16} className="text-gray-400" />
              <span className="text-sm text-gray-600">12 Feb 2025</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="col-span-8">
            {/* Total KYCs Card */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-1">Total KYCs</div>
              <div className="text-3xl font-bold text-gray-900">3,456</div>
            </div>

            {/* KYC Stats Cards */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <div className="flex items-center text-green-600 text-sm font-medium">
                    <TrendingUp size={14} className="mr-1" />
                    <span>12%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">New KYC</div>
                  <div className="text-2xl font-bold text-gray-900">3,000</div>
                  <div className="text-xs text-gray-400 mt-1">400 by KRA • 56 retrospective</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">M</span>
                  </div>
                  <div className="flex items-center text-red-500 text-sm font-medium">
                    <TrendingDown size={14} className="mr-1" />
                    <span>16%</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Modified KYC</div>
                  <div className="text-2xl font-bold text-gray-900">456</div>
                </div>
              </div>
            </div>

            {/* Chart Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium text-gray-900">Today</span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-1 rounded hover:bg-gray-100">
                  <BarChart3 size={16} className="text-gray-600" />
                </button>
                <button className="p-1 rounded hover:bg-gray-100">
                  <List size={16} className="text-gray-600" />
                </button>
              </div>
            </div>

            {/* Bar Chart */}
            <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
              <div className="flex items-center space-x-6 mb-6 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded mr-2"></div>
                  <span className="text-gray-600">Today</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-300 rounded mr-2"></div>
                  <span className="text-gray-600">Yesterday</span>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} barCategoryGap={60}>
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fontSize: 12, fill: '#6B7280' }}
                      domain={[0, 400]}
                      ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
                    />
                    <Bar dataKey="today" fill="#2563EB" radius={[2, 2, 0, 0]} barSize={50} />
                    <Bar dataKey="yesterday" fill="#93C5FD" radius={[2, 2, 0, 0]} barSize={50} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom Status Cards - exactly matching the UI */}
            <div className="grid grid-cols-6 gap-4">
              {statusCards.map((card, index) => {
                const icons = ['🚀', '⚙️', '⚡', '✅', '⏸️', '⚠️']
                return (
                  <div key={index} className="bg-white rounded-lg p-4 text-center border border-gray-200">
                    <div className="text-2xl mb-2">{icons[index]}</div>
                    <div className="text-xs text-gray-500 mb-2">{card.name}</div>
                    <div className="text-xl font-bold text-gray-900">{card.count}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column */}
          <div className="col-span-4">
            {/* Categories Section */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-semibold text-gray-900">Categories</div>
                <div className="flex space-x-4 text-xs">
                  <span className="text-blue-600 font-medium">Individual</span>
                  <span className="text-gray-400">Non Individual</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>RI</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>NRI</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pie Chart Section */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <div className="text-lg font-semibold text-gray-900">Solicited vs Unsolicited</div>
                <div className="flex space-x-4 text-xs">
                  <span className="text-blue-600 font-medium">Individual</span>
                  <span className="text-gray-400">Non Individual</span>
                </div>
              </div>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  {/* Custom CSS-based circular progress rings */}
                  <div className="absolute inset-0">
                    {/* Outer ring - Blue */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full" style={{
                        background: `conic-gradient(#1E40AF 0deg 270deg, #E5E7EB 270deg 360deg)`,
                        mask: 'radial-gradient(circle, transparent 76px, black 76px, black 92px, transparent 92px)',
                        WebkitMask: 'radial-gradient(circle, transparent 76px, black 76px, black 92px, transparent 92px)'
                      }}></div>
                    </div>
                    
                    {/* Second ring - Sky Blue */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full" style={{
                        background: `conic-gradient(from 30deg, #0EA5E9 0deg 216deg, #E5E7EB 216deg 360deg)`,
                        mask: 'radial-gradient(circle, transparent 61px, black 61px, black 73px, transparent 73px)',
                        WebkitMask: 'radial-gradient(circle, transparent 61px, black 61px, black 73px, transparent 73px)'
                      }}></div>
                    </div>
                    
                    {/* Third ring - Green */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full" style={{
                        background: `conic-gradient(from 60deg, #10B981 0deg 180deg, #E5E7EB 180deg 360deg)`,
                        mask: 'radial-gradient(circle, transparent 46px, black 46px, black 58px, transparent 58px)',
                        WebkitMask: 'radial-gradient(circle, transparent 46px, black 46px, black 58px, transparent 58px)'
                      }}></div>
                    </div>
                    
                    {/* Inner ring - Red */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full rounded-full" style={{
                        background: `conic-gradient(from 90deg, #EF4444 0deg 90deg, #E5E7EB 90deg 360deg)`,
                        mask: 'radial-gradient(circle, transparent 31px, black 31px, black 43px, transparent 43px)',
                        WebkitMask: 'radial-gradient(circle, transparent 31px, black 31px, black 43px, transparent 43px)'
                      }}></div>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-xl font-medium text-gray-900">3,456</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                {pieChartData.map((item, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div className={`w-3 h-3 rounded-full mr-3`} style={{ backgroundColor: item.color }}></div>
                    <span className="text-gray-600">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stats Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">No. Of PANs Solicited</div>
                      <div className="text-xs text-gray-500 flex items-center space-x-4">
                        <span>400 With KRA</span>
                        <span>250 With Image</span>
                        <span>250 Without Image</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">956</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">Data Received</div>
                      <div className="text-xs text-gray-500 flex items-center space-x-4">
                        <span>300 With KRA</span>
                        <span>100 With Image</span>
                        <span>20 Without Image</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">320</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}