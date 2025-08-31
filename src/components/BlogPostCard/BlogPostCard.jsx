import React from 'react'
import { Link } from 'react-router';

const BlogPostCard = ({ date, title, excerpt, readTime, linkUrl }) => {
  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="mb-3">
        <time className="text-sm text-gray-500">{date}</time>
      </div>
      <h3 className="font-semibold text-gray-900 mb-3 leading-tight">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{excerpt}</p>
      <Link to={linkUrl} className="text-emerald-600 hover:text-emerald-700 font-medium text-sm">
        Read full post
      </Link>
    </article>
  );
}

export default BlogPostCard
