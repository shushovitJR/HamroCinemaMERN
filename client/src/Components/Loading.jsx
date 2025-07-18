import React from 'react'

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-red-500 border-solid"></div>
    </div>
  )
}

export default Loading
