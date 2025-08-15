import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    kycCards: [
      {
        title: "New KYC",
        count: 12847,
        percentage: 8.5,
        isPositive: true
      },
      {
        title: "Modified KYC",
        count: 3249,
        percentage: -2.3,
        isPositive: false
      }
    ],
    chartData: [
      {
        name: "Today",
        individual: 4200,
        nonIndividual: 2400
      },
      {
        name: "Yesterday", 
        individual: 3900,
        nonIndividual: 2100
      }
    ],
    kycStatuses: [
      {
        title: "KYC Initiated",
        count: 8745,
        icon: "UserPlus",
        color: "bg-blue-500"
      },
      {
        title: "Under Process",
        count: 4521,
        icon: "Clock",
        color: "bg-yellow-500"
      },
      {
        title: "Registered",
        count: 12847,
        icon: "CheckCircle",
        color: "bg-green-500"
      },
      {
        title: "Validated",
        count: 9634,
        icon: "Shield",
        color: "bg-emerald-500"
      },
      {
        title: "Hold",
        count: 234,
        icon: "Pause",
        color: "bg-red-500"
      },
      {
        title: "Docs Pending",
        count: 1567,
        icon: "FileText",
        color: "bg-orange-500"
      }
    ],
    progressData: {
      individual: {
        type: "Individual",
        riProgress: 75,
        nriProgress: 45
      },
      nonIndividual: {
        type: "Non-Individual", 
        riProgress: 60,
        nriProgress: 80
      }
    },
    panData: {
      solicited: 15678,
      received: 12456,
      consumed: 9876,
      pending: 2580
    },
    panStats: {
      solicitedWithImage: 8945,
      solicitedWithoutImage: 6733,
      dataReceivedWithImage: 7234,
      dataReceivedWithoutImage: 5222
    }
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return NextResponse.json(data)
}