import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BackGradientRed from './BackGradientRed'
import BackGradientBlue from './BackGradientBlue'
import MovieCard from './MovieCard'
import { useAppContext } from '../context/AppContext'

const FeaturedSection = () => {
  const navigate = useNavigate();
  const { shows } = useAppContext();

  const handleNavigate = () => {
    navigate('/movies')
    scrollTo(0, 0)
  }

  return (
    <div className='relative overflow-hidden section-padding'>
      <BackGradientRed top='-150vh' right='50vh' />
      <BackGradientBlue top='30vh' left='50vh' />

      <div className='container-fluid'>
        {/* Section Header */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold text-white'>Now Showing</h2>
            <p className='text-gray-400 mt-2'>Check out our latest movies</p>
          </div>
          <button
            onClick={handleNavigate}
            className='group flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors'
          >
            View All
            <ArrowRight className='w-5 h-5 group-hover:translate-x-1 transition-transform' />
          </button>
        </div>

        {/* Movies Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12'>
          {shows.slice(0, 4).map((show) => (
            <MovieCard key={show._id} movie={show} />
          ))}
        </div>

        {/* Show More Button */}
        <div className='flex justify-center'>
          <button
            onClick={handleNavigate}
            className='btn-primary px-8 py-3 w-full sm:w-auto'
          >
            Show More Movies
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedSection