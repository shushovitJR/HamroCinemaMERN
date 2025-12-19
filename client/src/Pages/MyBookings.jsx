import React, { useEffect, useState } from 'react'
import Loading from '../Components/Loading'
import BackGradientRed from '../Components/BackGradientRed'
import BackGradientBlue from '../Components/BackGradientBlue'
import timeFormat from '../lib/timeformat'
import { DateFormat } from '../lib/DateFormat'
import { useAppContext } from '../context/AppContext'
import { Link } from 'react-router-dom'
import { Ticket, MapPin, Calendar, Clock } from 'lucide-react'

const MyBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const { axios, getToken, user, image_base_url } = useAppContext();

  const [bookings, setBookings] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getMyBookings = async () => {
    try {
      const { data } = await axios.get('/api/user/bookings', { headers: { Authorization: `Bearer ${await getToken()}` } })
      if (data.success) {
        setBookings(data.bookings)
      }
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (user) {
      getMyBookings()
    }
  }, [user])

  return !isLoading ? (
    <div className='relative min-h-screen'>
      <BackGradientRed top='-150vh' right='50vh' />
      <BackGradientBlue top='30vh' left='50vh' />

      <div className='container-fluid section-padding'>
        {/* Header */}
        <div className='mb-10'>
          <h1 className='text-4xl font-bold text-white mb-2'>My Bookings</h1>
          <p className='text-gray-400'>View and manage your movie bookings</p>
        </div>

        {/* Bookings List */}
        {bookings.length > 0 ? (
          <div className='space-y-6 pb-10'>
            {bookings.map((item, index) => (
              <div key={index} className='card hover:shadow-2xl hover:shadow-red-600/10 hover:border-red-600/30 transition-all'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                  
                  {/* Movie Poster */}
                  <div className='md:col-span-1'>
                    <img
                      src={image_base_url + item.show.movie.poster_path}
                      alt={item.show.movie.title}
                      className='w-full aspect-video object-cover object-bottom rounded-lg'
                    />
                  </div>

                  {/* Movie Details */}
                  <div className='md:col-span-2 space-y-4'>
                    <div>
                      <h3 className='text-xl md:text-2xl font-bold text-white'>
                        {item.show.movie.title}
                      </h3>
                      <p className='text-sm text-gray-400 mt-1'>
                        Duration: {timeFormat(item.show.movie.runtime)}
                      </p>
                    </div>

                    {/* Show Details */}
                    <div className='space-y-2 text-sm'>
                      <div className='flex items-center gap-2 text-gray-300'>
                        <Calendar className='w-4 h-4 text-red-500' />
                        <span>{DateFormat(item.show.showDateTime)}</span>
                      </div>
                      <div className='flex items-center gap-2 text-gray-300'>
                        <Ticket className='w-4 h-4 text-red-500' />
                        <span>Total Tickets: <span className='font-semibold'>{item.bookedSeats.length}</span></span>
                      </div>
                      <div className='flex items-center gap-2 text-gray-300'>
                        <MapPin className='w-4 h-4 text-red-500' />
                        <span>Seats: <span className='font-semibold'>{item.bookedSeats.join(', ')}</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Price and Action */}
                  <div className='md:col-span-1 flex flex-col justify-between items-end'>
                    <div className='text-right'>
                      <p className='text-sm text-gray-400 mb-1'>Total Amount</p>
                      <p className='text-3xl md:text-2xl font-bold text-red-500'>
                        {currency}{item.amount}
                      </p>
                    </div>

                    {/* Payment Status and Action */}
                    <div className='flex flex-col gap-2 w-full md:w-auto'>
                      {item.isPaid ? (
                        <div className='badge badge-success w-full md:w-auto text-center'>
                          ✓ Paid
                        </div>
                      ) : (
                        <>
                          <span className='text-xs text-yellow-400 text-center'>Pending Payment</span>
                          <Link
                            to={item.paymentLink}
                            className='btn-primary text-sm w-full md:w-auto'
                          >
                            Pay Now
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='card text-center py-16'>
            <Ticket className='w-16 h-16 mx-auto text-gray-600 mb-4' />
            <h3 className='text-xl font-semibold text-gray-300 mb-2'>No Bookings Yet</h3>
            <p className='text-gray-500 mb-6'>You haven't made any movie bookings yet. Start booking now!</p>
            <Link to='/movies' className='btn-primary inline-block'>
              Browse Movies
            </Link>
          </div>
        )}
      </div>
    </div>
  ) : <Loading />
}

export default MyBookings