'use client'

import React, { useState } from 'react'
import { Calendar } from 'lucide-react'
import { TimeRange, ViewType } from '@/lib/types'
import { cn } from '@/lib/utils'

interface TabSwitcherProps {
  timeRange: TimeRange
  viewType: ViewType
  onTimeRangeChange: (range: TimeRange) => void
  onViewTypeChange: (type: ViewType) => void
}

const timeRanges: TimeRange[] = ['Today', 'This Month', 'Custom']
const viewTypes: ViewType[] = ['Individual', 'Non-Individual']

export default function TabSwitcher({ 
  timeRange, 
  viewType, 
  onTimeRangeChange, 
  onViewTypeChange 
}: TabSwitcherProps) {
  const [showDatePicker, setShowDatePicker] = useState(false)

  const handleTimeRangeChange = (range: TimeRange) => {
    onTimeRangeChange(range)
    if (range === 'Custom') {
      setShowDatePicker(true)
    } else {
      setShowDatePicker(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Time Range Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <h3 className="text-lg font-semibold text-gray-700">Time Range:</h3>
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {timeRanges.map((range) => (
              <button
                key={range}
                onClick={() => handleTimeRangeChange(range)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  timeRange === range
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                )}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* View Type Toggle */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <h3 className="text-lg font-semibold text-gray-700">View:</h3>
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {viewTypes.map((type) => (
              <button
                key={type}
                onClick={() => onViewTypeChange(type)}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  viewType === type
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-800 hover:bg-gray-200"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Date Picker */}
      {showDatePicker && timeRange === 'Custom' && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-4">
            <Calendar size={20} className="text-gray-600" />
            <div className="flex items-center space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">From</label>
                <input
                  type="date"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">To</label>
                <input
                  type="date"
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}