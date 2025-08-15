'use client'

import dynamic from 'next/dynamic'
import { ChartData, PANData } from '@/lib/types'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

const BarChart = dynamic(
  () => import('./BarChart'),
  { 
    ssr: false,
    loading: () => <LoadingSkeleton className="h-80 w-full" />
  }
)

const PieChart = dynamic(
  () => import('./PieChart'),
  { 
    ssr: false,
    loading: () => <LoadingSkeleton className="h-80 w-full" />
  }
)

interface ChartsProps {
  barData: ChartData[]
  pieData: PANData
}

export { BarChart, PieChart }