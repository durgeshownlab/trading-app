import React from 'react'
import BlogPostCard from '../components/BlogPostCard/BlogPostCard';
import QuickActionCard from '../components/QuickActionCard/QuickActionCard';
import { ExternalLink, Users } from 'lucide-react';

const Home = () => {

  const quickActions = [
    {
      title: "Get started",
      description: "Read our getting started guide to get the most out of your Capitalmind subscription.",
      linkText: "Get started",
      linkUrl: "/",
      icon: Home
    },
    {
      title: "Community",
      description: "Join the conversation on our exclusive community on Slack for Capitalmind Premium subscribers",
      linkText: "Join community",
      linkUrl: "/",
      icon: Users
    },
    {
      title: "Visit website",
      description: "Keep up with our latest content on our website",
      linkText: "Visit website",
      linkUrl: "/",
      icon: ExternalLink
    }
  ];

  const blogPosts = [
    {
      date: "Apr 18, 2024",
      title: "CM Fixed Income: Exiting Banking & PSU to Add a New Gilt Fund",
      excerpt: "We are increasing the duration of our Fixed Income portfolio to reflect the current macro conditions. We want to take advantage of the current higher rates to further increase the duration of the Gilt funds we hold. Read more...",
      readTime: "5 min read",
      linkUrl: "/"
    },
    {
      date: "Apr 05, 2024",
      title: "Craftsman Automation: Poised for Growth Amid Temporary Headwinds",
      excerpt: "Unlock this post by trail. Craftsman Automation excels in making precise parts for cars and machines. Amidst temporary headwinds, looks resilient with a focus on growth and innovation....",
      readTime: "7 min read",
      linkUrl: "/"
    },
    {
      date: "Apr 03, 2024",
      title: "The Focused Way of Investing: Our Four-Quadrant Strategy and FY24 Review",
      excerpt: "FY24 brought us a 42% gain in our Capitalmind Focused portfolio, gently outperforming the Nifty's 29%. It's been a bit of a rollercoaster, especially these last few months, but that's part of the equity investing. It's like having a compass....",
      readTime: "10 min read",
      linkUrl: "/"
    },
    {
      date: "Mar 27, 2024",
      title: "A Small CAD for India, Yet Again",
      excerpt: "Yet again, India's Current Account Deficit is a mere 10 bn in the quarter (Dec 2023), less than levels more than a decade back, and less than 2017-18 too. Why net of gold? It's not really a current account import...",
      readTime: "4 min read",
      linkUrl: "/"
    },
    {
      date: "Mar 25, 2024",
      title: "Poonawalla Fincorp: One right step at a time",
      excerpt: "There are some winning patterns in investing that keep repeating. One such pattern is when a big company buys a struggling company, fixes old problems, and brings in new leadership to grow the business. This way has often led to...",
      readTime: "6 min read",
      linkUrl: "/"
    },
    {
      date: "Mar 18, 2024",
      title: "CM Focused: Reducing our allocation to smallcaps & increasing cash",
      excerpt: "In the last few days, we have seen increased volatility in the mid and small-cap segments. Small and mid-cap stocks have corrected quite a bit followed by some recovery and then correction again. What is happening in the market?...",
      readTime: "8 min read",
      linkUrl: "/"
    }
  ];

  return (
   <main className="flex-1 p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Home</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <QuickActionCard
              key={index}
              title={action.title}
              description={action.description}
              linkText={action.linkText}
              linkUrl={action.linkUrl}
              icon={action.icon}
            />
          ))}
        </div>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {blogPosts.map((post, index) => (
              <BlogPostCard
                key={index}
                date={post.date}
                title={post.title}
                excerpt={post.excerpt}
                readTime={post.readTime}
                linkUrl={post.linkUrl}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Home
