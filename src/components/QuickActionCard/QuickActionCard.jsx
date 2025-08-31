
import { ExternalLink } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const QuickActionCard = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {/* <Icon size={24} className="text-emerald-500" /> */}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <Link to={linkUrl} className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm">
            <span>{linkText}</span>
            <ExternalLink size={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default QuickActionCard
