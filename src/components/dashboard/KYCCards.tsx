import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { KYCCard } from '@/lib/types'
import { formatNumber, formatPercentage } from '@/lib/utils'

interface KYCCardsProps {
  cards: KYCCard[]
}

export default function KYCCards({ cards }: KYCCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {cards.map((card, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">{card.title}</h3>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {formatNumber(card.count)}
              </div>
              <div className={`flex items-center space-x-1 ${
                card.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {card.isPositive ? (
                  <TrendingUp size={16} />
                ) : (
                  <TrendingDown size={16} />
                )}
                <span className="text-sm font-medium">
                  {formatPercentage(card.percentage)}
                </span>
              </div>
            </div>
            
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              card.isPositive ? 'bg-green-100' : 'bg-red-100'
            }`}>
              {card.isPositive ? (
                <TrendingUp size={24} className="text-green-600" />
              ) : (
                <TrendingDown size={24} className="text-red-600" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}