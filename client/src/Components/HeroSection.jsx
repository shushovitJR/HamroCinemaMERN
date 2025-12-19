import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, CalendarIcon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
    const navigate = useNavigate();
    
    return (
        <div className='relative w-full min-h-screen flex flex-col items-start justify-center gap-6 md:gap-8 px-4 sm:px-6 md:px-16 lg:px-36 py-20 md:py-0 bg-cover bg-center overflow-hidden'
            style={{
                backgroundImage: 'url("/the-fantastic-four-first-steps-flying.jpg")',
                backgroundAttachment: 'fixed'
            }}>
            
            {/* Overlay for better text visibility */}
            <div className='absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 pointer-events-none'></div>
            
            {/* Content */}
            <div className='relative z-10 flex flex-col gap-6 md:gap-8 max-w-2xl'>
                
                {/* Logo */}
                <div className='flex bg-white items-center justify-center rounded-lg overflow-hidden w-40 sm:w-48 md:w-56 h-14 sm:h-16 md:h-20'>
                    <img src={assets.marvellogo} alt="Marvel Logo" className="h-full w-full object-contain p-2" />
                </div>

                {/* Title */}
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight'>
                    Fantastic Four <br className='hidden sm:block' />
                    First Steps
                </h1>

                {/* Metadata */}
                <div className='flex flex-wrap items-center gap-3 md:gap-6 text-sm md:text-base text-gray-200 font-medium'>
                    <span className='hover:text-red-500 transition'>Action | Adventure | Sci-Fi</span>
                    <div className='flex items-center gap-2'>
                        <CalendarIcon className='w-4 h-4' />
                        <span>2025</span>
                    </div>
                    <div className='flex items-center gap-2'>
                        <ClockIcon className='w-4 h-4' />
                        <span>1h 55m</span>
                    </div>
                </div>

                {/* Description */}
                <p className='text-sm md:text-base text-gray-100 max-w-xl leading-relaxed'>
                    Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel's First Family is forced to balance their roles as heroes with the strength of their family bond, while they are defending Earth from a dangerous space god called Galactus and his enigmatic Herald, Silver Surfer.
                </p>

                {/* CTA Button */}
                <button 
                    onClick={() => { navigate('/movies'); scrollTo(0, 0) }} 
                    className='btn-primary inline-flex items-center gap-2 w-fit mt-4'
                >
                    Explore More
                    <ArrowRight className='w-5 h-5' />
                </button>
            </div>
        </div>
    )
}

export default HeroSection