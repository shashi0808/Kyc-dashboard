'use client'

import React, { useState } from 'react'
import SidebarNew from '@/components/layout/SidebarNew'
import HeaderNew from '@/components/layout/HeaderNew'
import { Bell, Calendar, AlertCircle, Info, CheckCircle, X, Download, Search } from 'lucide-react'

interface Notice {
  id: string
  title: string
  message: string
  type: string
  priority: string
  date: string
  read: boolean
  category: string
}

const notices: Notice[] = [
  {
    id: 'NOT001',
    title: 'System Maintenance Scheduled',
    message: 'Our KYC processing system will undergo maintenance on Feb 15, 2025, from 11:00 PM to 3:00 AM IST.',
    type: 'maintenance',
    priority: 'medium',
    date: '2025-02-12',
    read: false,
    category: 'System'
  },
  {
    id: 'NOT002',
    title: 'New KYC Compliance Requirements',
    message: 'Updated KYC compliance guidelines effective from March 1, 2025. Please review the new requirements.',
    type: 'compliance',
    priority: 'high',
    date: '2025-02-10',
    read: true,
    category: 'Regulatory'
  },
  {
    id: 'NOT003',
    title: 'Rate Card Update Notification',
    message: 'New pricing structure has been implemented. View the updated rate card for detailed information.',
    type: 'update',
    priority: 'medium',
    date: '2025-02-08',
    read: false,
    category: 'Pricing'
  }
]

const getNoticeIcon = (type: string) => {
  switch (type) {
    case 'maintenance': return <AlertCircle size={20} className="text-orange-600" />
    case 'compliance': return <Bell size={20} className="text-red-600" />
    case 'update': return <Info size={20} className="text-blue-600" />
    case 'report': return <CheckCircle size={20} className="text-green-600" />
    case 'feature': return <CheckCircle size={20} className="text-purple-600" />
    case 'security': return <AlertCircle size={20} className="text-red-600" />
    default: return <Bell size={20} className="text-gray-600" />
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'high': return 'bg-red-100 text-red-800'
    case 'medium': return 'bg-yellow-100 text-yellow-800'
    case 'low': return 'bg-green-100 text-green-800'
    default: return 'bg-gray-100 text-gray-800'
  }
}

export default function Notices() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const unreadCount = notices.filter(notice => !notice.read).length
  
  const filteredNotices = notices.filter(notice => {
    if (!searchTerm) return true
    return notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           notice.message.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <div className="flex h-screen bg-gray-50">
      <SidebarNew />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <HeaderNew />
        
        <div className="flex-1 p-6 overflow-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  Notices & Announcements
                  {unreadCount > 0 && (
                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      {unreadCount} unread
                    </span>
                  )}
                </h1>
                <p className="text-gray-600">Stay updated with important notifications and announcements</p>
              </div>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  <Download size={16} />
                  <span>Export</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  <Bell size={16} />
                  <span>Mark All Read</span>
                </button>
              </div>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Bell size={24} className="text-blue-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Total Notices</p>
                  <p className="text-2xl font-bold text-gray-900">{notices.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-lg">
                  <AlertCircle size={24} className="text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">Unread</p>
                  <p className="text-2xl font-bold text-gray-900">{unreadCount}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <AlertCircle size={24} className="text-orange-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">High Priority</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notices.filter(n => n.priority === 'high').length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Calendar size={24} className="text-green-600" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {notices.filter(n => n.date.startsWith('2025-02')).length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="bg-white rounded-lg p-4 mb-6">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 w-full text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Notices List */}
          <div className="space-y-4">
            {filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className={`bg-white rounded-lg p-6 border-l-4 ${
                  notice.read ? 'border-l-gray-300' : 'border-l-blue-500'
                } hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="mt-1">
                      {getNoticeIcon(notice.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className={`text-lg font-semibold ${notice.read ? 'text-gray-700' : 'text-gray-900'}`}>
                          {notice.title}
                        </h3>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(notice.priority)}`}>
                          {notice.priority}
                        </span>
                        {!notice.read && (
                          <span className="inline-flex w-2 h-2 bg-blue-500 rounded-full"></span>
                        )}
                      </div>
                      <p className={`text-sm mb-3 ${notice.read ? 'text-gray-500' : 'text-gray-700'}`}>
                        {notice.message}
                      </p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={12} />
                          <span>{notice.date}</span>
                        </div>
                        <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">
                          {notice.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {!notice.read && (
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <CheckCircle size={16} />
                      </button>
                    )}
                    <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <div className="bg-white rounded-lg p-12 text-center">
              <Bell size={48} className="text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No notices found</h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? 'Try adjusting your search criteria'
                  : 'You\'re all caught up! No new notices at this time.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}