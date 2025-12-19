import React, { useEffect, useState } from "react";
import Title from "../../Components/admin/Title.jsx";
import { DateFormat } from "../../lib/DateFormat";
import Loading from "../../Components/Loading.jsx";
import { useAppContext } from "../../context/AppContext";
import { Users, Calendar, Sofa, CreditCard } from "lucide-react";


const ListBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;

  const { axios, getToken, user } = useAppContext();

  const [bookings, setBookings] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const getAllBookings = async () => {
    try {
      const { data } = await axios.get('/api/admin/all-bookings', {
        headers: { Authorization: `Bearer ${await getToken()}` }
      });
      setBookings(data.bookings);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      getAllBookings();
    }
  }, [user]);

  return !loading ? (
    <>
      <Title text1="List " text2="Bookings" />

      <div className="mt-8 space-y-4">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600/20 to-blue-900/20 border border-blue-600/30">
                <th className="px-4 py-3 text-left font-semibold text-white">User Name</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Movie Name</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Show Time</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Seats</th>
                <th className="px-4 py-3 text-left font-semibold text-white">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {bookings.length > 0 ? (
                bookings.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-900/30 transition-colors">
                    <td className="px-4 py-3 text-white font-medium flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-500" />
                      {item.user.name}
                    </td>
                    <td className="px-4 py-3 text-gray-400">{item.show.movie.title}</td>
                    <td className="px-4 py-3 text-gray-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-purple-500" />
                      {DateFormat(item.show.showDateTime)}
                    </td>
                    <td className="px-4 py-3 text-gray-400 flex items-center gap-2">
                      <Sofa className="w-4 h-4 text-orange-500" />
                      {Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(", ")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-green-400 flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      {currency}{item.amount}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                    No bookings available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden space-y-4">
          {bookings.length > 0 ? (
            bookings.map((item, index) => (
              <div key={index} className='card'>
                <div className='space-y-3'>
                  <div className='flex items-center gap-2 mb-3'>
                    <Users className="w-5 h-5 text-blue-500" />
                    <h3 className='text-lg font-semibold text-white'>{item.user.name}</h3>
                  </div>

                  <div className='bg-gray-900 rounded-lg p-3 space-y-2'>
                    <p className='text-white font-medium'>{item.show.movie.title}</p>
                    <div className='flex items-center gap-2 text-sm text-gray-400'>
                      <Calendar className="w-4 h-4 text-purple-500" />
                      {DateFormat(item.show.showDateTime)}
                    </div>
                  </div>

                  <div className='grid grid-cols-2 gap-3'>
                    <div className='bg-gray-900 rounded-lg p-3'>
                      <p className='text-xs text-gray-400 mb-1 flex items-center gap-1'>
                        <Sofa className="w-3 h-3 text-orange-500" />
                        Seats
                      </p>
                      <p className='text-sm font-semibold text-white'>
                        {Object.keys(item.bookedSeats).map(seat => item.bookedSeats[seat]).join(", ")}
                      </p>
                    </div>

                    <div className='bg-green-600/20 border border-green-600/30 rounded-lg p-3'>
                      <p className='text-xs text-gray-400 mb-1 flex items-center gap-1'>
                        <CreditCard className="w-3 h-3 text-green-500" />
                        Amount
                      </p>
                      <p className='text-sm font-bold text-green-400'>
                        {currency}{item.amount}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className='card text-center py-8'>
              <p className='text-gray-500'>No bookings available</p>
            </div>
          )}
        </div>
      </div>
    </>
  ) : <Loading />
}

export default ListBookings