'use client'

import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { PANData, TooltipProps } from '@/lib/types'
import { formatNumber } from '@/lib/utils'

interface PieChartProps {
  data: PANData
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444']

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium">{payload[0]?.name || ''}</p>
        <p className="text-sm" style={{ color: payload[0]?.color }}>
          {`Count: ${formatNumber(payload[0]?.value || 0)}`}
        </p>
      </div>
    )
  }
  return null
}

export default function PieChartComponent({ data }: PieChartProps) {
  const chartData = [
    { name: 'PANs Solicited', value: data.solicited },
    { name: 'PANs Received', value: data.received },
    { name: 'PANs Consumed', value: data.consumed },
    { name: 'PANs Pending', value: data.pending },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">Solicited & Unsolicited PANs</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Chart */}
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center space-y-4">
          {chartData.map((item, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-700">{item.name}</div>
                <div className="text-lg font-semibold text-gray-900">
                  {formatNumber(item.value)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}