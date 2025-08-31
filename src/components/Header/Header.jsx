

import React from 'react'

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 left-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <div>
            <span className="font-semibold text-gray-800">capitalmind</span>
            <span className="text-emerald-500 text-sm ml-1">premium</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
