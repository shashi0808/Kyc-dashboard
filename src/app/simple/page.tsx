'use client'

import React, { useState, useEffect } from 'react'
import { DashboardData } from '@/lib/types'

export default function SimpleDashboard() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/dashboard')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
        setError(error instanceof Error ? error.message : 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Loading Dashboard...</h1>
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-red-600">Error</h1>
        <p className="text-red-500">{error}</p>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    )
  }

  if (!data) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4 text-gray-600">No Data</h1>
        <p>Failed to load dashboard data.</p>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Simple KYC Dashboard</h1>
      
      {/* Basic KYC Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {data.kycCards?.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{card.title}</h3>
            <div className="text-2xl font-bold text-gray-900">{card.count.toLocaleString()}</div>
            <div className={`text-sm ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {card.isPositive ? '+' : ''}{card.percentage}%
            </div>
          </div>
        ))}
      </div>

      {/* Basic Status Grid */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">KYC Status Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.kycStatuses?.map((status, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <h4 className="text-sm font-medium text-gray-600 mb-2">{status.title}</h4>
              <div className="text-xl font-bold text-gray-900">{status.count.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Raw Data Display */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Debug Info</h3>
        <p className="text-sm text-gray-600">Data loaded successfully!</p>
        <details className="mt-2">
          <summary className="cursor-pointer text-blue-600">Show Raw Data</summary>
          <pre className="mt-2 text-xs bg-white p-2 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </details>
      </div>
    </div>
  )
}