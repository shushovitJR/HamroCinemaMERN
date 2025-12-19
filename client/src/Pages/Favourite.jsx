import BackGradientBlue from "../Components/BackGradientBlue"
import BackGradientRed from "../Components/BackGradientRed"
import MovieCard from "../Components/MovieCard"
import { useAppContext } from "../context/AppContext"
import { Heart } from "lucide-react"
import { Link } from "react-router-dom"

const Favourite = () => {
  const { favouriteMovies } = useAppContext();

  return favouriteMovies.length > 0 ? (
    <div className='relative min-h-screen overflow-hidden'>
      <BackGradientRed top='-150vh' right='50vh' />
      <BackGradientBlue top='30vh' left='50vh' />

      <div className='container-fluid section-padding'>
        {/* Header */}
        <div className='mb-8 md:mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-2'>Your Favourites</h1>
          <p className='text-gray-400'>
            {favouriteMovies.length} movie{favouriteMovies.length !== 1 ? 's' : ''} saved
          </p>
        </div>

        {/* Favourites Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 pb-20'>
          {favouriteMovies.map((movie) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className='relative min-h-screen flex items-center justify-center'>
      <BackGradientRed top='-150vh' right='50vh' />
      <BackGradientBlue top='30vh' left='50vh' />

      <div className='text-center space-y-6'>
        <Heart className='w-20 h-20 mx-auto text-gray-600' />
        <h1 className='text-3xl md:text-4xl font-bold text-white'>No Favourites Yet</h1>
        <p className='text-gray-400 max-w-md mx-auto'>
          You haven't added any movies to your favourites. Start exploring and add your favorite movies!
        </p>
        <Link 
          to='/movies' 
          className='btn-primary inline-block mt-6'
        >
          Explore Movies
        </Link>
      </div>
    </div>
  )
}

export default Favourite