import React, { useEffect, useState } from 'react'
import Loading from '../../Components/Loading';
import { DateFormat } from '../../lib/DateFormat';
import Title from '../../Components/admin/Title';
import { useAppContext } from '../../context/AppContext';
import { Calendar, Users, TrendingUp } from 'lucide-react';


const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const { axios, getToken, user } = useAppContext();

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllShows = async () => {
    try {
      const { data } = await axios.get('/api/admin/all-shows', { headers: { Authorization: `Bearer ${await getToken()}` } });
      setShows(data.shows);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      getAllShows();
    }
  }, [user]);

  return !loading ? (
    <>
      <Title text1="List " text2="Shows" />
      
      <div className="mt-8 space-y-4">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-red-600/20 to-red-900/20 border border-red-600/30">
                <th className="px-4 py-3 text-left font-semibold text-white">Movie Name</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Show Time</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Total Bookings</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Earnings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {shows.length > 0 ? (
                shows.map((show, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-900/30 transition-colors"
                  >
                    <td className="px-4 py-3 text-white font-medium">{show.movie.title}</td>
                    <td className="px-4 py-3 text-gray-400">
                      <div className='flex items-center gap-2'>
                        <Calendar className='w-4 h-4 text-red-500' />
                        {DateFormat(show.showDateTime)}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      <div className='flex items-center gap-2'>
                        <Users className='w-4 h-4 text-blue-500' />
                        {Object.keys(show.occupiedSeats).length}
                      </div>
                    </td>
                    <td className="px-4 py-3 font-semibold text-green-400">
                      <div className='flex items-center gap-2'>
                        <TrendingUp className='w-4 h-4' />
                        {currency}{Object.keys(show.occupiedSeats).length * show.showPrice}
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-8 text-center text-gray-500">
                    No shows available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {shows.length > 0 ? (
            shows.map((show, index) => (
              <div key={index} className='card'>
                <div className='space-y-3'>
                  <h3 className='text-lg font-semibold text-white'>{show.movie.title}</h3>
                  
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-gray-900 rounded-lg p-3'>
                      <p className='text-xs text-gray-400 mb-1'>Show Time</p>
                      <p className='text-sm font-semibold text-white flex items-center gap-2'>
                        <Calendar className='w-4 h-4 text-red-500' />
                        {DateFormat(show.showDateTime)}
                      </p>
                    </div>
                    
                    <div className='bg-gray-900 rounded-lg p-3'>
                      <p className='text-xs text-gray-400 mb-1'>Bookings</p>
                      <p className='text-sm font-semibold text-white flex items-center gap-2'>
                        <Users className='w-4 h-4 text-blue-500' />
                        {Object.keys(show.occupiedSeats).length}
                      </p>
                    </div>
                  </div>

                  <div className='bg-green-600/20 border border-green-600/30 rounded-lg p-3'>
                    <p className='text-xs text-gray-400 mb-1'>Earnings</p>
                    <p className='text-xl font-bold text-green-400 flex items-center gap-2'>
                      <TrendingUp className='w-5 h-5' />
                      {currency}{Object.keys(show.occupiedSeats).length * show.showPrice}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='card text-center py-8'>
              <p className='text-gray-500'>No shows available</p>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default ListShows;
