'use client'

import React from 'react'
import SidebarNew from '@/components/layout/SidebarNew'
import HeaderNew from '@/components/layout/HeaderNew'
import { Search, Filter, Download, Eye, Edit, Trash2, Calendar } from 'lucide-react'

const applications = [
  { id: 'KYC001', name: 'John Doe', email: 'john.doe@email.com', status: 'Pending Review', date: '2025-02-10', type: 'New KYC' },
  { id: 'KYC002', name: 'Sarah Smith', email: 'sarah.smith@email.com', status: 'Approved', date: '2025-02-09', type: 'Modified KYC' },
  { id: 'KYC003', name: 'Michael Johnson', email: 'michael.j@email.com', status: 'Under Review', date: '2025-02-08', type: 'New KYC' },
  { id: 'KYC004', name: 'Emily Davis', email: 'emily.davis@email.com', status: 'Documents Required', date: '2025-02-07', type: 'New KYC' },
  { id: 'KYC005', name: 'David Wilson', email: 'david.wilson@email.com', status: 'Rejected', date: '2025-02-06', type: 'Modified KYC' },
  { id: 'KYC006', name: 'Lisa Anderson', email: 'lisa.anderson@email.com', status: 'Approved', date: '2025-02-05', type: 'New KYC' },
  { id: 'KYC007', name: 'Robert Brown', email: 'robert.brown@email.com', status: 'Pending Review', date: '2025-02-04', type: 'Modified KYC' },
  { id: 'KYC008', name: 'Jennifer Garcia', email: 'jennifer.g@email.com', status: 'Under Review', date: '2025-02-03', type: 'New KYC' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Approved': return 'bg-green-100 text-green-800'
    case 'Pending Review': return 'bg-yellow-100 text-yellow-800'
    case 'Under Review': return 'bg-blue-100 text-blue-800'
    case 'Documents Required': return 'bg-orange-100 text-orange-800'
    case 'Rejected': return 'bg-red-100 text-red-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Applications() {
  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarNew />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <HeaderNew />
        
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">KYC Applications</h1>
            <p className="text-gray-600">Manage and track all KYC applications</p>
          </div>

          {/* Filters and Actions */}
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <div className="flex space-x-3">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search applications..."
                    className="pl-9 pr-4 py-2 w-64 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Calendar size={16} />
                  <span>Date Range</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                <Download size={16} />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Applications Table */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Application ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{app.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{app.name}</div>
                          <div className="text-sm text-gray-500">{app.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(app.status)}`}>
                          {app.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{app.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Eye size={16} />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <Edit size={16} />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-6 rounded-lg">
            <div className="flex-1 flex justify-between sm:hidden">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                Next
              </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of{' '}
                  <span className="font-medium">47</span> results
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
                  <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    1
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-50 text-sm font-medium text-blue-600">
                    2
                  </button>
                  <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    3
                  </button>
                  <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}