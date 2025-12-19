import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { LayoutDashboardIcon, PlusSquareIcon, ListIcon, Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const user = {
    firstName: 'Admin',
    lastName: 'User',
    imageUrl: assets.profile,
  }

  const adminNavLinks = [
    { name: 'Dashboard', to: '/admin', icon: LayoutDashboardIcon },
    { name: 'Add Shows', to: '/admin/add-shows', icon: PlusSquareIcon },
    { name: 'List Shows', to: '/admin/list-shows', icon: ListIcon },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className='md:hidden fixed bottom-6 right-6 z-40 p-3 bg-red-600 hover:bg-red-700 rounded-full shadow-lg transition'
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:static inset-y-0 left-0 w-64 md:w-60 bg-gray-950 border-r border-gray-800 flex flex-col pt-8 text-sm transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}
        style={{ top: '64px' }}>
        
        {/* Profile Section */}
        <div className='flex flex-col items-center px-4 pb-8 border-b border-gray-800'>
          <img 
            className='h-12 w-12 rounded-full border-2 border-red-600' 
            src={user.imageUrl} 
            alt="Admin Profile"
          />
          <p className='mt-3 text-base font-semibold text-white'>
            {user.firstName} {user.lastName}
          </p>
          <p className='text-xs text-gray-500 mt-1'>Administrator</p>
        </div>

        {/* Navigation Links */}
        <nav className='flex-1 px-3 py-6 space-y-2'>
          {adminNavLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <NavLink 
                key={index}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive 
                      ? 'bg-red-600/20 text-red-500 border-l-2 border-red-600 font-semibold' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-900'
                  }`
                }
              >
                <Icon className='w-5 h-5' />
                <span>{link.name}</span>
              </NavLink>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className='border-t border-gray-800 px-4 py-4'>
          <p className='text-xs text-gray-500 text-center'>
            © {new Date().getFullYear()} Hamro Cinema Admin
          </p>
        </div>
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className='fixed inset-0 bg-black/50 md:hidden z-30'
          onClick={() => setIsOpen(false)}
          style={{ top: '64px' }}
        ></div>
      )}
    </>
  )
}

export default AdminSidebar
