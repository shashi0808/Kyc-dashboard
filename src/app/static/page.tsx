import React from 'react'

export default function StaticDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Static Sidebar */}
      <aside className="fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-lg">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">KYC Dashboard</span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            <div className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-50 text-blue-600 border-r-4 border-blue-600">
              <span>📊</span>
              <span className="font-medium">Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-50">
              <span>📄</span>
              <span className="font-medium">Applications</span>
            </div>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Static Navbar */}
        <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Home</span>
              <span>&gt;</span>
              <span className="text-gray-900 font-medium">Dashboard</span>
            </div>
            <div className="flex items-center space-x-6">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 w-64 border border-gray-300 rounded-lg"
              />
              <div className="relative">
                <span className="text-2xl">🔔</span>
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">John Doe</div>
                  <div className="text-xs text-gray-500">Thursday, 15 August 2025</div>
                </div>
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">JD</span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* KYC Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">New KYC</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">12.8K</div>
                    <div className="flex items-center space-x-1 text-green-600">
                      <span>↗</span>
                      <span className="text-sm font-medium">+8.5%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100">
                    <span className="text-green-600 text-2xl">↗</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Modified KYC</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">3.2K</div>
                    <div className="flex items-center space-x-1 text-red-600">
                      <span>↘</span>
                      <span className="text-sm font-medium">-2.3%</span>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100">
                    <span className="text-red-600 text-2xl">↘</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Chart Placeholder */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">Individual vs Non-Individual KYC</h3>
              <div className="h-80 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600">Chart will load here</p>
                </div>
              </div>
            </div>

            {/* Status Grid */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-6">KYC Status Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "KYC Initiated", count: "8.7K", color: "bg-blue-500", icon: "👤" },
                  { title: "Under Process", count: "4.5K", color: "bg-yellow-500", icon: "⏰" },
                  { title: "Registered", count: "12.8K", color: "bg-green-500", icon: "✅" },
                  { title: "Validated", count: "9.6K", color: "bg-emerald-500", icon: "🛡️" },
                  { title: "Hold", count: "234", color: "bg-red-500", icon: "⏸️" },
                  { title: "Docs Pending", count: "1.6K", color: "bg-orange-500", icon: "📄" }
                ].map((status, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-sm font-medium text-gray-600">{status.title}</h4>
                      <div className={`w-10 h-10 ${status.color} rounded-lg flex items-center justify-center`}>
                        <span className="text-white text-lg">{status.icon}</span>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{status.count}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Static Dashboard</h3>
              <p className="text-gray-600">
                This is a static version of the dashboard to test basic functionality. 
                All components are rendered without dynamic imports or complex charts.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}