import React from 'react'
import { 
  UserPlus, 
  Clock, 
  CheckCircle, 
  Shield, 
  Pause, 
  FileText 
} from 'lucide-react'
import { KYCStatus } from '@/lib/types'
import { formatNumber } from '@/lib/utils'

interface KYCStatusGridProps {
  statuses: KYCStatus[]
}

const iconMap = {
  UserPlus,
  Clock,
  CheckCircle,
  Shield,
  Pause,
  FileText
}

export default function KYCStatusGrid({ statuses }: KYCStatusGridProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-gray-700 mb-6">KYC Status Overview</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statuses.map((status, index) => {
          const IconComponent = iconMap[status.icon as keyof typeof iconMap]
          
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-medium text-gray-600">{status.title}</h4>
                <div className={`w-10 h-10 ${status.color} rounded-lg flex items-center justify-center`}>
                  <IconComponent size={20} className="text-white" />
                </div>
              </div>
              
              <div className="text-2xl font-bold text-gray-900">
                {formatNumber(status.count)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}