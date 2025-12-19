import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, StarIcon, UsersIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Loading from '../../Components/Loading';
import Title from '../../Components/admin/Title';
import BackGradientRed from '../../Components/BackGradientRed';
import { DateFormat } from '../../lib/DateFormat';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {

  const { axios, getToken, user, image_base_url } = useAppContext()

  const currency = import.meta.env.VITE_CURRENCY;

  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    activeShows: [],
    totalUser: 0,
  });

  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    { title: 'Total Bookings', value: String(dashboardData.totalBookings || 0), icon: ChartLineIcon, color: 'blue' },
    { title: 'Total Revenue', value: `${currency}${dashboardData.totalRevenue || 0}`, icon: CircleDollarSignIcon, color: 'green' },
    { title: 'Active Shows', value: String(dashboardData.activeShows?.length || 0), icon: PlayCircleIcon, color: 'purple' },
    { title: 'Total Users', value: String(dashboardData.totalUser || 0), icon: UsersIcon, color: 'orange' },
  ];

  const fetchDashboardData = async () => {

    try {
      const { data } = await axios.get("/api/admin/dashboard", { headers: { Authorization: `Bearer ${await getToken()}` } })
      if (data.success) {
        setDashboardData(data.dashboardData)
        setLoading(false)
      } else {
        console.error(data.message)
      }
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    }
  };

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const getCardColor = (color) => {
    switch (color) {
      case 'blue':
        return 'from-blue-600/20 to-blue-900/20 border-blue-600/30';
      case 'green':
        return 'from-green-600/20 to-green-900/20 border-green-600/30';
      case 'purple':
        return 'from-purple-600/20 to-purple-900/20 border-purple-600/30';
      case 'orange':
        return 'from-orange-600/20 to-orange-900/20 border-orange-600/30';
      default:
        return 'from-red-600/20 to-red-900/20 border-red-600/30';
    }
  };

  const getIconColor = (color) => {
    switch (color) {
      case 'blue':
        return 'text-blue-400';
      case 'green':
        return 'text-green-400';
      case 'purple':
        return 'text-purple-400';
      case 'orange':
        return 'text-orange-400';
      default:
        return 'text-red-400';
    }
  };

  return !loading ? (
    <>
      <Title text1="Admin " text2="Dashboard" />

      <div className="relative mt-8 space-y-8">
        <BackGradientRed />

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className={`card bg-gradient-to-br ${getCardColor(card.color)} hover:shadow-lg transition-all duration-300`}
              >
                <div className='flex items-center justify-between'>
                  <div className='flex-1'>
                    <p className="text-sm text-gray-400 font-medium">{card.title}</p>
                    <p className="text-2xl lg:text-3xl font-bold text-white mt-2">{String(card.value)}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${getIconColor(card.color)} opacity-80`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Shows Section */}
        <div>
          <div className='mb-6'>
            <h2 className='text-2xl lg:text-3xl font-bold text-white'>Active Shows</h2>
            <p className='text-gray-400 mt-1'>Currently showing movies and their details</p>
          </div>

          {dashboardData.activeShows.length > 0 ? (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {dashboardData.activeShows.map((show) => (
                <div key={show._id} className='card group hover:border-red-600/50 overflow-hidden'>
                  {/* Poster Image */}
                  <div className='relative overflow-hidden aspect-video bg-gray-900 mb-3'>
                    <img
                      src={image_base_url + show.movie.poster_path}
                      alt={show.movie.title}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                    {/* Rating Badge */}
                    <div className='absolute top-2 right-2 bg-black/80 px-2 py-1 rounded-lg flex items-center gap-1'>
                      <StarIcon className='w-4 h-4 text-yellow-400 fill-yellow-400' />
                      <span className='text-sm font-semibold'>{show.movie.vote_average.toFixed(1)}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className='space-y-3'>
                    <p className='font-semibold text-white truncate group-hover:text-red-400 transition'>
                      {show.movie.title}
                    </p>

                    {/* Price */}
                    <div className='flex items-center justify-between pt-3 border-t border-gray-800'>
                      <p className='text-gray-400 text-sm'>Show Price</p>
                      <p className='text-lg font-bold text-red-500'>{currency}{show.showPrice}</p>
                    </div>

                    {/* Date/Time */}
                    <p className='text-xs text-gray-500'>
                      {DateFormat(show.showDateTime)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='card text-center py-12'>
              <PlayCircleIcon className='w-12 h-12 mx-auto text-gray-600 mb-3' />
              <p className='text-gray-400'>No active shows available</p>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Dashboard;
