import React from 'react'
import { ProgressData } from '@/lib/types'

interface ProgressBarsProps {
  individualData: ProgressData
  nonIndividualData: ProgressData
}

interface ProgressBarProps {
  label: string
  progress: number
  color: string
}

function ProgressBar({ label, progress, color }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{label}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color} transition-all duration-300 ease-out`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default function ProgressBars({ individualData, nonIndividualData }: ProgressBarsProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      {/* Individual Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Individual Categories</h3>
        
        <ProgressBar
          label="RI (Resident Individual)"
          progress={individualData.riProgress}
          color="bg-green-500"
        />
        
        <ProgressBar
          label="NRI (Non-Resident Individual)"
          progress={individualData.nriProgress}
          color="bg-blue-500"
        />
      </div>

      {/* Non-Individual Progress */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-6">Non-Individual Categories</h3>
        
        <ProgressBar
          label="RI (Resident Individual)"
          progress={nonIndividualData.riProgress}
          color="bg-green-500"
        />
        
        <ProgressBar
          label="NRI (Non-Resident Individual)"
          progress={nonIndividualData.nriProgress}
          color="bg-blue-500"
        />
      </div>
    </div>
  )
}