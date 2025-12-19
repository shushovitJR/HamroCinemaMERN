import BackGradientBlue from './BackGradientBlue'
import BackGradientRed from './BackGradientRed'
import { useState } from 'react'
import { dummyTrailers } from '../assets/assets'
import { PlayCircleIcon } from 'lucide-react'
import ReactPlayer from 'react-player'

const TrailersSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0])

    return (
        <div className='relative section-padding overflow-hidden'>
            <BackGradientRed top='-150vh' right='50vh' />
            <BackGradientBlue top='30vh' left='50vh' />

            <div className='container-fluid'>
                {/* Section Header */}
                <div className='mb-10'>
                    <h2 className='text-3xl md:text-4xl font-bold text-white'>Featured Trailers</h2>
                    <p className='text-gray-400 mt-2'>Watch the latest movie trailers</p>
                </div>

                {/* Main Video Player */}
                <div className='relative mb-10 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition'>
                    <div className='bg-gray-900 aspect-video'>
                        <ReactPlayer
                            url={currentTrailer.videoUrl}
                            controls={true}
                            width="100%"
                            height="100%"
                            playing={false}
                            light={true}
                            config={{
                                youtube: {
                                    playerVars: { showinfo: 1 }
                                }
                            }}
                        />
                    </div>
                </div>

                {/* Trailer Thumbnails Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    {dummyTrailers.map((trailer, index) => (
                        <div
                            key={index}
                            onClick={() => setCurrentTrailer(trailer)}
                            className={`group relative aspect-video cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                                currentTrailer === trailer 
                                    ? 'border-red-600 ring-2 ring-red-600/50' 
                                    : 'border-gray-800 hover:border-red-600/50'
                            }`}
                        >
                            <img
                                src={trailer.image}
                                alt="Trailer"
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 brightness-75 group-hover:brightness-100'
                            />
                            <div className='absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center'>
                                <PlayCircleIcon className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-red-500 transition-colors" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrailersSection