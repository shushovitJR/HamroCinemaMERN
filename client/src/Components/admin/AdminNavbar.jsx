import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { LogOut } from 'lucide-react'

const AdminNavbar = () => {
  return (
    <div className='sticky top-0 z-40 bg-black border-b border-gray-800 backdrop-blur-lg'>
      <div className='flex items-center justify-between px-4 sm:px-6 md:px-10 h-16 md:h-20'>
        <Link to="/admin" className='flex-shrink-0'>
          <img src={assets.MainLogo} alt="Hamro Cinema Logo" className='h-10 md:h-12 w-auto hover:opacity-80 transition' />
        </Link>
        
        <div className='flex items-center gap-4'>
          <p className='text-sm md:text-base text-gray-400'>Admin Dashboard</p>
          <button className='p-2 hover:bg-gray-900 rounded-lg transition text-gray-400 hover:text-red-500'>
            <LogOut className='w-5 h-5' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default AdminNavbar