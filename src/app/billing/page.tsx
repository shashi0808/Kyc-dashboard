'use client'

import React from 'react'
import SidebarNew from '@/components/layout/SidebarNew'
import HeaderNew from '@/components/layout/HeaderNew'
import { Download, CreditCard, DollarSign, FileText, Calendar, TrendingUp } from 'lucide-react'

const billingData = {
  currentBill: 15678.50,
  lastMonth: 14523.25,
  totalTransactions: 3456,
  pendingPayments: 2340.75
}

const invoices = [
  { id: 'INV-2025-001', date: '2025-02-01', amount: 15678.50, status: 'Paid', dueDate: '2025-02-15' },
  { id: 'INV-2025-002', date: '2025-01-01', amount: 14523.25, status: 'Paid', dueDate: '2025-01-15' },
  { id: 'INV-2024-012', date: '2024-12-01', amount: 13899.00, status: 'Paid', dueDate: '2024-12-15' },
  { id: 'INV-2024-011', date: '2024-11-01', amount: 12456.75, status: 'Paid', dueDate: '2024-11-15' },
  { id: 'INV-2024-010', date: '2024-10-01', amount: 11234.50, status: 'Overdue', dueDate: '2024-10-15' },
]

const transactions = [
  { id: 'TXN001', type: 'KYC Processing', count: 1250, rate: 12.50, amount: 15625.00, date: '2025-02-10' },
  { id: 'TXN002', type: 'Document Verification', count: 890, rate: 8.75, amount: 7787.50, date: '2025-02-09' },
  { id: 'TXN003', type: 'PAN Verification', count: 456, rate: 5.25, amount: 2394.00, date: '2025-02-08' },
  { id: 'TXN004', type: 'Address Verification', count: 234, rate: 15.00, amount: 3510.00, date: '2025-02-07' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Paid': return 'bg-green-100 text-green-800'
    case 'Pending': return 'bg-yellow-100 text-yellow-800'
    case 'Overdue': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Billing() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarNew />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <HeaderNew />
        
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Billing & Payments</h1>
            <p className="text-gray-600">Track your billing, invoices, and transaction history</p>
          </div>

          {/* Billing Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <DollarSign size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Current Bill</p>
                  <p className="text-2xl font-bold text-gray-900">₹{billingData.currentBill.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <TrendingUp size={24} className="text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Last Month</p>
                  <p className="text-2xl font-bold text-gray-900">₹{billingData.lastMonth.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <FileText size={24} className="text-purple-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Transactions</p>
                  <p className="text-2xl font-bold text-gray-900">{billingData.totalTransactions.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <CreditCard size={24} className="text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Pending</p>
                  <p className="text-2xl font-bold text-gray-900">₹{billingData.pendingPayments.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Invoices */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Recent Invoices</h3>
                <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800">
                  <Download size={16} />
                  <span>Export All</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <FileText size={20} className="text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{invoice.id}</p>
                        <p className="text-sm text-gray-500">Due: {invoice.dueDate}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{invoice.amount.toLocaleString()}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Transaction Breakdown</h3>
                <button className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800">
                  <Calendar size={16} />
                  <span>This Month</span>
                </button>
              </div>
              
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{transaction.type}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.count} transactions × ₹{transaction.rate}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">₹{transaction.amount.toLocaleString()}</p>
                      <p className="text-sm text-gray-500">{transaction.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-lg p-6 mt-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Payment Methods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <CreditCard size={24} className="text-blue-600" />
                  <span className="font-medium">Credit Card</span>
                </div>
                <p className="text-sm text-gray-500">**** **** **** 1234</p>
                <p className="text-sm text-gray-500">Expires 12/26</p>
              </div>
              
              <div className="border border-dashed border-gray-300 rounded-lg p-4 flex items-center justify-center">
                <button className="text-blue-600 hover:text-blue-800 font-medium">+ Add Payment Method</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}