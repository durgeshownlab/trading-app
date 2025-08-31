import { Archive, ArrowDown, ArrowDownNarrowWide, Briefcase, ChevronDown, FlaskConical, Gift, Home, LogOut, User, Users } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router';
import styles from './SideBar.module.scss'

const SideBar = ({ activeItem, setActiveItem }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: "/" },
    { id: 'portfolios', label: 'Portfolios', icon: Briefcase, path: "/portfolio"  },
    { id: 'experimentals', label: 'Experimentals', icon: FlaskConical, path: "/experimentals"  },
    { id: 'slack', label: 'Slack Archives', icon: Archive, path: "/slack"  },
    { id: 'refer', label: 'Refer a friend', icon: Users, path: "/refer"  },
    { id: 'gift', label: 'Gift a subscription', icon: Gift, path: "/gift"  },
    { id: 'account', label: 'Account', icon: User, path: "/account"  },
  ];

  const [isProfileDropDownVisible, setIsProfileDropDownVisible] = useState(false)
  const profileDropdownRef = useRef();

  useEffect(()=>{
    const handleDropdownOutsideClick = (e)=>{
      if(profileDropdownRef.current && !profileDropdownRef.current.contains(e.target)) {
        setIsProfileDropDownVisible(false)
      }
    }

    document.addEventListener('click', handleDropdownOutsideClick)

    return ()=>{
      document.removeEventListener('click', handleDropdownOutsideClick)
    }
  }, [])

  return (
    <aside className={`flex flex-col justify-between w-64 bg-gray-50 border-r border-gray-200 sticky top-20 ${styles.sidebarContainer}`}>
      <nav className="mt-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              to={item.path}
              key={item.id}
            className={ ({isActive, isPending}) => ` w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-100 transition-colors ${isActive ? 'bg-gray-100 border-r-2 border-emerald-500' : ''}` }
            >
              <Icon size={20} className="text-gray-600" />
              <span className="text-gray-700">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>

      <button className='flex justify-between w-full px-6 py-3 sticky bottom-0 bg-gray-50 hover:bg-gray-100 cursor-pointer' ref={profileDropdownRef}>
        <div className='flex items-center justify-center gap-1' onClick={()=>setIsProfileDropDownVisible(!isProfileDropDownVisible)}>
          <span className='w-10 h-10 flex items-center justify-center bg-emerald-600 text-white rounded-full'>RN</span>
          <ChevronDown size={16} className='text-gray-600' />
        </div>
        <div className='flex flex-col justify-center items-end'>
          <span className='text-sm text-gray-700 font-medium'>CMP1Y</span>
          <span className='text-xs text-gray-600'>Valid till Apr 19, 2025</span>
        </div>
        { 
          isProfileDropDownVisible &&
          <div className={`absolute bottom-full left-6 bg-gray-50 shadow-lg border border-gray-50 rounded-md ${styles.profileDropdown}`}>
            <Link
              to={'/'}
              className={ `w-full flex items-center space-x-3 px-6 py-3 text-left hover:bg-gray-100 transition-colors` }
            >
              <User size={20} className="text-gray-600" />
              <span className="text-gray-700">Profile</span>
            </Link>
            <Link
              to={'/'}
              className={ `w-full flex items-center space-x-3 px-6 py-3 text-left text-red-700 hover:bg-gray-100 transition-colors` }
            >
              <LogOut size={20} className="text-red-600 " />
              <span className="text-red-600">Logout</span>
            </Link>
          </div>
        }
      </button>
    </aside>
  );
}

export default SideBar
