import React from 'react'
import { Arrowicon, Eyeicon, Filtericon, Navicon, Searchicon, Storeicon } from './components/icons'
import Statistics from './components/Statistics';
import Sidebar from './partials/Sidebar'

function SearchInput() {
  return (
    <div className='flex items-stretch border-2 border-gray-200 rounded-2xl font-light w-[400px] overflow-hidden'>
      <div className='p-3'>
        <Searchicon />
      </div>
      <input type="text" placeholder="Search for stats" className='flex-1' />
    </div>
  )
}

function CircleBar({ percent }: { percent: number }) {
  const circumference = 30 * 2 * Math.PI;
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-full scale-150"
    >
      <svg className="w-20 h-20 -rotate-90">
        <circle
          className="text-transparent"
          strokeWidth="5"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
        <circle
          className="text-black"
          stroke-width="5"
          stroke-dasharray={circumference}
          stroke-dashoffset={circumference - percent / 100 * circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="30"
          cx="40"
          cy="40"
        />
      </svg>
      <span className="absolute text-black font-bold">{percent}%</span>
    </div>
  )
}

function App() {

  return (
    <div className='w-full h-screen bg-white flex font-poppins'>
      <Sidebar />
      <div className='flex-1 overflow-y-scroll p-8 grid grid-cols-12 gap-6'>
        <div className='col-span-9'>
          <SearchInput />
          <div className='flex items-center justify-between my-8'>
            <div>
              <h1 className='text-black font-bold text-3xl mb-1'>Hello David</h1>
              <p className='text-sm text-gray-400'>Welcome Back!</p>
            </div>

            <button className='flex items-center px-4 py-2 border-2 space-x-3 border-gray-200 rounded-xl text-gray-400'>
              <span>Filters</span>
              <Filtericon />
            </button>

          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2 bg-[#f9f8f3] p-8 rounded-3xl grid grid-cols-3">
              <div className='space-y-4'>
                <div className='bg-[#e4e0d5] w-12 h-12 text-black rounded-full grid place-content-center'>
                  <Eyeicon />
                </div>
                <p className='text-[#8c8c8b] text-sm font-light'>Views</p>
                <p className='text-black font-bold text-xl'>500</p>
                <p className='text-[#8c8c8b] text-sm font-light'>Per Day</p>
              </div>
              <div className='space-y-4'>
                <div className='bg-[#e4e0d5] w-12 h-12 text-black rounded-full grid place-content-center'>
                  <Navicon />
                </div>
                <p className='text-[#8c8c8b] text-sm font-light'>Visits</p>
                <p className='text-black font-bold text-xl'>200</p>
                <p className='text-[#8c8c8b] text-sm font-light'>Per Minutes</p>
              </div>
              <div className='space-y-4'>
                <div className='bg-[#e4e0d5] w-12 h-12 text-black rounded-full grid place-content-center'>
                  <Storeicon />
                </div>
                <p className='text-[#8c8c8b] text-sm font-light'>Orders</p>
                <p className='text-black font-bold text-xl'>5100</p>
                <p className='text-[#8c8c8b] text-sm font-light'>Per Day</p>
              </div>
            </div>
            <div className="bg-[#ffeee2] p-8 rounded-3xl relative grid grid-cols-2 gap-4 items-center">
              <div className='text-[#d58047] absolute top-0 right-0 p-5 rotate-45'>
                <Arrowicon />
              </div>
              <div>
                <h3 className='font-bold text-black text-2xl mb-1'>Sales</h3>
                <p className='text-[#8c8c8b] text-sm mb-3'>Total Sales Today</p>
                <p className='font-bold text-black text-3xl mb-1'>$500</p>
              </div>
              <div>
                <CircleBar percent={55} />
              </div>

            </div>
            <div className="bg-[#eefcef] p-8 rounded-3xl relative grid grid-cols-2 gap-4 items-center">
              <div className='text-[#7bcd80] absolute top-0 right-0 p-5 rotate-45'>
                <Arrowicon />
              </div>
              <div>
                <h3 className='font-bold text-black text-2xl mb-1'>Profit</h3>
                <p className='text-[#8c8c8b] text-sm mb-3'>Per day ration</p>
                <p className='font-bold text-black text-3xl mb-1'>$150</p>
              </div>
              <div>
                <CircleBar percent={30} />
              </div>
            </div>
            <div className="bg-[#e6f5fa] p-8 rounded-3xl relative grid grid-cols-2 gap-4 items-center">
              <div className='text-[#74c2d9] absolute top-0 right-0 p-5 -rotate-45'>
                <Arrowicon />
              </div>
              <div>
                <h3 className='font-bold text-black text-2xl mb-1'>Orders</h3>
                <p className='text-[#8c8c8b] text-sm mb-3'>Total Order Today</p>
                <p className='font-bold text-black text-3xl mb-1'>1000</p>
              </div>
              <div>
                <CircleBar percent={80} />
              </div>
            </div>
            <div className="bg-[#f4f5f9] p-8 rounded-3xl relative grid grid-cols-2 gap-4 items-center">
              <div className='text-black absolute top-0 right-0 p-5 -rotate-45'>
                <Arrowicon />
              </div>
              <div>
                <h3 className='font-bold text-black text-2xl mb-1'>Visits</h3>
                <p className='text-[#8c8c8b] text-sm mb-3'>Total Visit Today</p>
                <p className='font-bold text-black text-3xl mb-1'>400</p>
              </div>
              <div>
                <CircleBar percent={55} />
              </div>
            </div>
          </div>
        </div>
        <Statistics />
      </div>
    </div>
  )
}

export default App
