export interface KYCCard {
  title: string
  count: number
  percentage: number
  isPositive: boolean
}

export interface KYCStatus {
  title: string
  count: number
  icon: string
  color: string
}

export interface ChartData {
  name: string
  individual: number
  nonIndividual: number
}

export interface PANData {
  solicited: number
  received: number
  consumed: number
  pending: number
}

export interface PANStats {
  solicitedWithImage: number
  solicitedWithoutImage: number
  dataReceivedWithImage: number
  dataReceivedWithoutImage: number
}

export interface ProgressData {
  type: string
  riProgress: number
  nriProgress: number
}

export type TimeRange = 'Today' | 'This Month' | 'Custom'
export type ViewType = 'Individual' | 'Non-Individual'

export interface DashboardData {
  kycCards: KYCCard[]
  chartData: ChartData[]
  kycStatuses: KYCStatus[]
  progressData: {
    individual: ProgressData
    nonIndividual: ProgressData
  }
  panData: PANData
  panStats: PANStats
}

export interface TooltipProps {
  active?: boolean
  payload?: Array<{
    dataKey?: string
    value?: number
    color?: string
    name?: string
  }>
  label?: string
}