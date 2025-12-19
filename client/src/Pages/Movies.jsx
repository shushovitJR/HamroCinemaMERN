import BackGradientBlue from "../Components/BackGradientBlue"
import BackGradientRed from "../Components/BackGradientRed"
import MovieCard from "../Components/MovieCard"
import { useAppContext } from "../context/AppContext"
import Fuse from 'fuse.js';

const Movies = () => {
  const { shows, searchTerm } = useAppContext();

  const options = {
    keys: ["title", "description", "genre"],
    threshold: 0.4,
    distance: 100,
    ignoreLocation: true,
  };

  let filteredMovies = shows;

  if (searchTerm) {
    const fuse = new Fuse(shows, options);
    const results = fuse.search(searchTerm);
    filteredMovies = results.map(result => result.item);
  }

  return filteredMovies.length > 0 ? (
    <div className='relative min-h-screen overflow-hidden'>
      <BackGradientRed top='-150vh' right='50vh' />
      <BackGradientBlue top='30vh' left='50vh' />
      
      <div className='container-fluid section-padding'>
        {/* Header */}
        <div className='mb-8 md:mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold text-white mb-2'>
            {searchTerm ? `Search Results for "${searchTerm}"` : 'Now Showing'}
          </h1>
          <p className='text-gray-400'>
            {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Movies Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 pb-20'>
          {filteredMovies.map((movie) => (
            <MovieCard movie={movie} key={movie._id} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className='relative min-h-screen flex items-center justify-center'>
      <BackGradientRed top='-150vh' right='50vh' />
      <BackGradientBlue top='30vh' left='50vh' />
      
      <div className='text-center'>
        <h1 className='text-3xl md:text-4xl font-bold text-white mb-3'>
          No Movies Found
        </h1>
        <p className='text-gray-400 mb-6'>
          {searchTerm 
            ? `No movies match "${searchTerm}". Try a different search.` 
            : 'No movies are currently available.'}
        </p>
      </div>
    </div>
  )
}

export default Movies