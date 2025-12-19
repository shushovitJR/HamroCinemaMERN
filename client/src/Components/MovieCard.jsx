import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeformat'
import { useAppContext } from '../context/AppContext'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()
    const { image_base_url } = useAppContext();

    const handleNavigate = () => {
        navigate(`/movie/${movie._id}`)
        scrollTo(0, 0)
    }

    return (
        <div className='group flex flex-col h-full bg-gray-950 rounded-xl border border-gray-800 overflow-hidden hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-600/10'>
            
            {/* Image Container */}
            <div className='relative overflow-hidden aspect-video bg-gray-900'>
                <img
                    onClick={handleNavigate}
                    src={image_base_url + movie.backdrop_path}
                    alt={movie.title}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer'
                />
                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3'>
                    <button
                        onClick={handleNavigate}
                        className='w-full btn-primary text-sm py-2'
                    >
                        View Details
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className='flex flex-col flex-1 p-4 space-y-3'>
                
                {/* Title */}
                <p className='font-semibold text-white truncate group-hover:text-red-400 transition-colors line-clamp-2'>
                    {movie.title}
                </p>

                {/* Metadata */}
                <p className='text-sm text-gray-400 line-clamp-1'>
                    {new Date(movie.release_date).getFullYear()} • {movie.genres.slice(0, 2).map(genre => genre.name).join(' | ')} • {timeFormat(movie.runtime)}
                </p>

                {/* Rating and CTA */}
                <div className='flex items-center justify-between mt-auto pt-3 border-t border-gray-800'>
                    <div className='flex items-center gap-1.5'>
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className='text-sm font-semibold text-gray-300'>
                            {movie.vote_average.toFixed(1)}
                        </span>
                    </div>
                    <button
                        onClick={handleNavigate}
                        className='px-4 py-1.5 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors'
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard