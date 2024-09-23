import React from 'react'

const SolarSystem = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      {/* Sun */}
      <div className="relative flex justify-center items-center w-32 h-32 rounded-full bg-yellow-400 animate-spin-slow">
        {/* Orbit paths */}
        <div className="absolute w-64 h-64 rounded-full border border-gray-600"></div>
        <div className="absolute w-96 h-96 rounded-full border border-gray-600"></div>
        <div className="absolute w-[30rem] h-[30rem] rounded-full border border-gray-600"></div>

        {/* Planets */}
        {/* Planet 1 */}
        <div className="absolute w-5 h-5 rounded-full bg-blue-500 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 animate-orbit-slow"></div>
        {/* Planet 2 */}
        <div className="absolute w-6 h-6 rounded-full bg-red-500 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 animate-orbit-medium"></div>
        {/* Planet 3 */}
        <div className="absolute w-8 h-8 rounded-full bg-green-500 top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 animate-orbit-fast"></div>
      </div>
    </div>
  )
}

export default SolarSystem