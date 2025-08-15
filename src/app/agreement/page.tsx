'use client'

import React from 'react'
import SidebarNew from '@/components/layout/SidebarNew'
import HeaderNew from '@/components/layout/HeaderNew'
import { Download, FileText, Calendar, User, Building, Shield } from 'lucide-react'

const agreementDetails = {
  agreementNumber: 'KYC-AGR-2025-001',
  effectiveDate: '2025-01-01',
  expiryDate: '2025-12-31',
  clientName: 'Axis Mutual Fund',
  clientType: 'Asset Management Company',
  signedDate: '2024-12-15',
  status: 'Active'
}

const keyTerms = [
  {
    title: 'Service Scope',
    content: 'Complete KYC processing, document verification, and compliance reporting services for individual and corporate clients.'
  },
  {
    title: 'Service Level Agreement',
    content: 'KYC processing within 24 hours for individual applications and 72 hours for corporate applications during business days.'
  },
  {
    title: 'Data Security',
    content: 'All client data encrypted using AES-256 encryption, stored in ISO 27001 certified data centers with 99.9% uptime guarantee.'
  },
  {
    title: 'Compliance Standards',
    content: 'Services compliant with RBI guidelines, PMLA requirements, and SEBI regulations for mutual fund KYC processing.'
  },
  {
    title: 'Volume Commitments',
    content: 'Minimum monthly processing volume of 1,000 KYC applications with tiered pricing based on actual volumes.'
  },
  {
    title: 'Termination Clause',
    content: '90-day notice period required for termination. Data retention for 7 years as per regulatory requirements.'
  }
]

export default function Agreement() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarNew />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <HeaderNew />
        
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Service Agreement</h1>
                <p className="text-gray-600">KYC Processing Service Agreement Details</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Download size={16} />
                  <span>Download Agreement</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  <FileText size={16} />
                  <span>View Full Document</span>
                </button>
              </div>
            </div>
          </div>

          {/* Agreement Overview */}
          <div className="bg-white rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Agreement Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText size={20} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Agreement Number</p>
                  <p className="font-semibold text-gray-900">{agreementDetails.agreementNumber}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar size={20} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Effective Date</p>
                  <p className="font-semibold text-gray-900">{agreementDetails.effectiveDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Calendar size={20} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Expiry Date</p>
                  <p className="font-semibold text-gray-900">{agreementDetails.expiryDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <Shield size={20} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                    {agreementDetails.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Client Information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Building size={20} className="text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Organization</p>
                    <p className="font-medium text-gray-900">{agreementDetails.clientName}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <User size={20} className="text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Client Type</p>
                    <p className="font-medium text-gray-900">{agreementDetails.clientType}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-gray-600" />
                  <div>
                    <p className="text-sm text-gray-500">Agreement Signed</p>
                    <p className="font-medium text-gray-900">{agreementDetails.signedDate}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg text-left hover:bg-gray-50">
                  <Download size={16} className="text-blue-600" />
                  <span className="text-sm font-medium text-gray-900">Download Original Agreement</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg text-left hover:bg-gray-50">
                  <FileText size={16} className="text-green-600" />
                  <span className="text-sm font-medium text-gray-900">View Amendment History</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg text-left hover:bg-gray-50">
                  <Calendar size={16} className="text-purple-600" />
                  <span className="text-sm font-medium text-gray-900">Schedule Renewal Meeting</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg text-left hover:bg-gray-50">
                  <Shield size={16} className="text-orange-600" />
                  <span className="text-sm font-medium text-gray-900">Request Amendment</span>
                </button>
              </div>
            </div>
          </div>

          {/* Key Terms */}
          <div className="bg-white rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Key Terms & Conditions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {keyTerms.map((term, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">{term.title}</h4>
                  <p className="text-sm text-gray-600">{term.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Document Timeline */}
          <div className="bg-white rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Agreement Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Agreement Signed</p>
                  <p className="text-xs text-gray-500">December 15, 2024</p>
                  <p className="text-xs text-gray-600 mt-1">Initial service agreement executed by both parties</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Agreement Effective</p>
                  <p className="text-xs text-gray-500">January 1, 2025</p>
                  <p className="text-xs text-gray-600 mt-1">Service agreement became effective</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Mid-term Review</p>
                  <p className="text-xs text-gray-500">June 30, 2025</p>
                  <p className="text-xs text-gray-600 mt-1">Scheduled review of terms and performance metrics</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Agreement Expiry</p>
                  <p className="text-xs text-gray-500">December 31, 2025</p>
                  <p className="text-xs text-gray-600 mt-1">Current agreement term expires - renewal required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}