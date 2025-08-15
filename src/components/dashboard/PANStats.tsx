import React from 'react'
import { Image, ImageOff, Database, FileImage } from 'lucide-react'
import { PANStats as PANStatsType } from '@/lib/types'
import { formatNumber } from '@/lib/utils'

interface PANStatsProps {
  stats: PANStatsType
}

export default function PANStats({ stats }: PANStatsProps) {
  const panStats = [
    {
      title: 'PANs Solicited (with image)',
      count: stats.solicitedWithImage,
      icon: Image,
      color: 'bg-blue-500'
    },
    {
      title: 'PANs Solicited (without image)',
      count: stats.solicitedWithoutImage,
      icon: ImageOff,
      color: 'bg-gray-500'
    }
  ]

  const dataStats = [
    {
      title: 'Data Received (with image)',
      count: stats.dataReceivedWithImage,
      icon: FileImage,
      color: 'bg-green-500'
    },
    {
      title: 'Data Received (without image)',
      count: stats.dataReceivedWithoutImage,
      icon: Database,
      color: 'bg-purple-500'
    }
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* PAN Stats */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">PAN Statistics</h3>
        
        <div className="space-y-6">
          {panStats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">{stat.title}</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(stat.count)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Data Received Stats */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Data Received</h3>
        
        <div className="space-y-6">
          {dataStats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <div key={index} className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-600">{stat.title}</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {formatNumber(stat.count)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}