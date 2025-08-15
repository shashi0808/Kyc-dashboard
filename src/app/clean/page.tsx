'use client'

import Link from 'next/link'

export default function CleanTest() {
  const handleButtonClick = () => {
    alert('Button clicked! No overlay blocking interaction.')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Clean Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">White Overlay Test</h2>
          <p className="text-gray-600 mb-4">
            This page has no sidebar, no complex components, and should have no overlay issues.
            If you can see this text clearly and interact with the button below, 
            the overlay issue is resolved.
          </p>
          
          <button 
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={handleButtonClick}
          >
            Test Button - Click Me
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Navigation Test</h2>
          <div className="space-y-2">
            <Link 
              href="/" 
              className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              ← Back to Full Dashboard
            </Link>
            <Link 
              href="/static" 
              className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              → Go to Static Dashboard
            </Link>
            <Link 
              href="/simple" 
              className="block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              → Go to Simple Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}