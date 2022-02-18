import React from 'react'
import { Filtericon, Searchicon } from './components/icons'
import Sidebar from './partials/Sidebar'

function SearchInput() {
  return (
    <div className='flex items-stretch border-2 border-gray-200 rounded-2xl font-light w-[400px] overflow-hidden'>
      <div className='p-3'>
        <Searchicon />
      </div>
        <input type="text" placeholder="Search for stats" className='flex-1'/>
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
                <div className="col-span-2 bg-[#f9f8f3] p-10 rounded-3xl">

                </div>
                <div className="bg-[#ffeee2] p-10 rounded-3xl">

                </div>
                <div className="bg-[#eefcef] p-10 rounded-3xl">

                </div>
                <div className="bg-[#e6f5fa] p-10 rounded-3xl">

                </div>
                <div className="bg-[#f4f5f9] p-10 rounded-3xl">

                </div>
              </div>
          </div>
          <div className='col-span-3 bg-black rounded-3xl'>

          </div>
        </div>
    </div>
  )
}

export default App
