import { assets } from '../assets/assets'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { MenuIcon, SearchIcon, TicketPlus, XIcon, Bell, Home, Clapperboard, Heart } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { useAppContext } from '../context/AppContext'
import axios from 'axios'
import useRecommendations from './useRecommendations'

const Navbar = () => {
    const { setSearchTerm, favouriteMovies } = useAppContext();
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { user } = useUser()
    const { openSignIn } = useClerk()
    const navigate = useNavigate()
    const location = useLocation()

    const [showSearch, setShowSearch] = useState(false);
    const [input, setInput] = useState('');
    const [showRecs, setShowRecs] = useState(false);
    const recs = useRecommendations();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (path) => {
        return location.pathname === path ? 'text-red-500' : 'text-white'
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchTerm(input);
        setShowSearch(false);
        navigate('/movies');
    };

    const handleNavClick = () => {
        setIsOpen(false)
        scrollTo(0, 0)
    }

    useEffect(() => {
        axios.get("/api/recommend")
            .then(res => setRecs(res.data.recommendations))
            .catch(err => console.error(err));
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
            scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-700/50' : 'bg-gradient-to-b from-black/80 to-black/30'
        }`}>
            {/* Main navbar container */}
            <div className='flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-36 py-3 sm:py-4'>
                
                {/* Logo */}
                <div className='flex-shrink-0'>
                    <Link to='/' onClick={handleNavClick}>
                        <img src={assets.MainLogo} alt='Hamro Cinema' className='h-10 sm:h-12 w-auto cursor-pointer hover:opacity-80 transition' />
                    </Link>
                </div>

                {/* Desktop Navigation Links - Center */}
                <div className='hidden md:flex items-center gap-8 lg:gap-12 flex-1 justify-center ml-8'>
                    <Link 
                        to='/' 
                        onClick={handleNavClick}
                        className={`flex items-center gap-2 text-sm lg:text-base font-medium transition-colors ${isActive('/')}`}
                    >
                        <Home className='w-4 h-4' />
                        <span className='hidden lg:inline'>Home</span>
                    </Link>
                    <Link 
                        to='/movies' 
                        onClick={handleNavClick}
                        className={`flex items-center gap-2 text-sm lg:text-base font-medium transition-colors ${isActive('/movies')}`}
                    >
                        <Clapperboard className='w-4 h-4' />
                        <span className='hidden lg:inline'>Movies</span>
                    </Link>
                    {favouriteMovies.length > 0 && (
                        <Link 
                            to='/favourite' 
                            onClick={handleNavClick}
                            className={`flex items-center gap-2 text-sm lg:text-base font-medium transition-colors ${isActive('/favourite')}`}
                        >
                            <Heart className='w-4 h-4' />
                            <span className='hidden lg:inline'>Favourites</span>
                        </Link>
                    )}
                </div>

                {/* Right side - Search, Notifications, Auth */}
                <div className='flex items-center gap-4 sm:gap-6'>
                    {/* Search */}
                    <div className='hidden sm:block relative'>
                        <SearchIcon 
                            className='w-5 h-5 cursor-pointer hover:text-red-500 transition text-gray-300'
                            onClick={() => setShowSearch(!showSearch)}
                        />
                        {showSearch && (
                            <div className="absolute top-full right-0 mt-2 bg-black border border-gray-700 rounded-lg shadow-xl p-3 w-64">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={e => {
                                        setInput(e.target.value);
                                        setSearchTerm(e.target.value);
                                        navigate('/movies');
                                    }}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
                                    placeholder="Search movies..."
                                    className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                                    autoFocus
                                />
                            </div>
                        )}
                    </div>

                    {/* Auth buttons */}
                    {!user ? (
                        <button 
                            onClick={openSignIn} 
                            className='px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors'
                        >
                            Sign In
                        </button>
                    ) : (
                        <div className='flex items-center gap-4'>
                            <UserButton 
                                appearance={{
                                    elements: {
                                        userButtonAvatarBox: 'w-8 h-8 sm:w-10 sm:h-10'
                                    }
                                }}
                            >
                                <UserButton.MenuItems>
                                    <UserButton.Action label="My Bookings" labelIcon={<TicketPlus width={15}/>} onClick={() => { navigate('/my-bookings'); handleNavClick() }}/>
                                </UserButton.MenuItems>
                            </UserButton>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    <button 
                        className='md:hidden p-2 hover:bg-gray-800 rounded-lg transition'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <XIcon className='w-6 h-6' />
                        ) : (
                            <MenuIcon className='w-6 h-6' />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className='md:hidden bg-black/95 border-t border-gray-700/50'>
                    <div className='px-4 py-4 space-y-3'>
                        <Link 
                            to='/' 
                            onClick={handleNavClick}
                            className='flex items-center gap-2 px-4 py-2 hover:bg-gray-900 rounded-lg transition text-white font-medium'
                        >
                            <Home className='w-4 h-4' />
                            Home
                        </Link>
                        <Link 
                            to='/movies' 
                            onClick={handleNavClick}
                            className='flex items-center gap-2 px-4 py-2 hover:bg-gray-900 rounded-lg transition text-white font-medium'
                        >
                            <Clapperboard className='w-4 h-4' />
                            Movies
                        </Link>
                        {favouriteMovies.length > 0 && (
                            <Link 
                                to='/favourite' 
                                onClick={handleNavClick}
                                className='flex items-center gap-2 px-4 py-2 hover:bg-gray-900 rounded-lg transition text-white font-medium'
                            >
                                <Heart className='w-4 h-4' />
                                Favourites
                            </Link>
                        )}
                        
                        {/* Mobile search */}
                        <div className='px-4 py-2'>
                            <input
                                type="text"
                                value={input}
                                onChange={e => {
                                    setInput(e.target.value);
                                    setSearchTerm(e.target.value);
                                    navigate('/movies');
                                    setIsOpen(false);
                                }}
                                placeholder="Search movies..."
                                className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                            />
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
