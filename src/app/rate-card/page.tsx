'use client'

import React from 'react'
import SidebarNew from '@/components/layout/SidebarNew'
import HeaderNew from '@/components/layout/HeaderNew'
import { Download, Edit, Check, X, Info } from 'lucide-react'

const rateCards = [
  {
    category: 'KYC Processing',
    services: [
      { name: 'New Individual KYC', rate: 12.50, unit: 'per application', description: 'Complete KYC processing for individual customers' },
      { name: 'Modified Individual KYC', rate: 8.75, unit: 'per application', description: 'KYC modification for existing individual customers' },
      { name: 'New Corporate KYC', rate: 45.00, unit: 'per application', description: 'Complete KYC processing for corporate entities' },
      { name: 'Modified Corporate KYC', rate: 25.00, unit: 'per application', description: 'KYC modification for existing corporate entities' },
    ]
  },
  {
    category: 'Document Verification',
    services: [
      { name: 'PAN Verification', rate: 5.25, unit: 'per verification', description: 'Real-time PAN card verification' },
      { name: 'Aadhaar Verification', rate: 7.50, unit: 'per verification', description: 'Aadhaar card verification with OTP' },
      { name: 'Address Verification', rate: 15.00, unit: 'per verification', description: 'Physical address verification' },
      { name: 'Bank Account Verification', rate: 10.00, unit: 'per verification', description: 'Bank account validation' },
    ]
  },
  {
    category: 'Additional Services',
    services: [
      { name: 'Document Upload & Storage', rate: 2.00, unit: 'per document', description: 'Secure document storage for 7 years' },
      { name: 'SMS Notifications', rate: 0.50, unit: 'per SMS', description: 'Status update SMS notifications' },
      { name: 'Email Notifications', rate: 0.25, unit: 'per email', description: 'Status update email notifications' },
      { name: 'API Integration Support', rate: 500.00, unit: 'one-time setup', description: 'Technical integration support' },
    ]
  }
]

const volumeDiscounts = [
  { range: '1 - 1,000', discount: '0%', description: 'Standard rates apply' },
  { range: '1,001 - 5,000', discount: '5%', description: '5% discount on all services' },
  { range: '5,001 - 10,000', discount: '10%', description: '10% discount on all services' },
  { range: '10,001 - 25,000', discount: '15%', description: '15% discount on all services' },
  { range: '25,000+', discount: '20%', description: '20% discount + dedicated support' },
]

export default function RateCard() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarNew />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <HeaderNew />
        
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Rate Card</h1>
                <p className="text-gray-600">Current pricing for KYC services and verifications</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Download size={16} />
                  <span>Download PDF</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  <Edit size={16} />
                  <span>Request Changes</span>
                </button>
              </div>
            </div>
          </div>

          {/* Rate Card Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start space-x-3">
              <Info size={20} className="text-blue-600 mt-0.5" />
              <div>
                <h3 className="text-sm font-semibold text-blue-900">Rate Card Effective Date</h3>
                <p className="text-sm text-blue-700 mt-1">
                  These rates are effective from January 1, 2025. All prices are in Indian Rupees (₹) and exclusive of applicable taxes.
                </p>
              </div>
            </div>
          </div>

          {/* Service Categories */}
          <div className="space-y-8">
            {rateCards.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">{category.category}</h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {category.services.map((service, serviceIndex) => (
                        <tr key={serviceIndex} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{service.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-bold text-gray-900">₹{service.rate}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{service.unit}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{service.description}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* Volume Discounts */}
          <div className="bg-white rounded-lg p-6 mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Volume Discounts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {volumeDiscounts.map((discount, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">{discount.range} transactions</span>
                    <span className="text-lg font-bold text-blue-600">{discount.discount}</span>
                  </div>
                  <p className="text-xs text-gray-500">{discount.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-white rounded-lg p-6 mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Terms & Conditions</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>All rates are subject to applicable taxes as per current tax regulations</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Volume discounts are calculated monthly based on total transaction count</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Failed verifications due to system issues will not be charged</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Rates may be revised with 30 days prior written notice</span>
              </div>
              <div className="flex items-start space-x-2">
                <Check size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>Minimum monthly billing amount of ₹1,000 applies</span>
              </div>
              <div className="flex items-start space-x-2">
                <X size={16} className="text-red-600 mt-0.5 flex-shrink-0" />
                <span>No refunds for successfully processed transactions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}