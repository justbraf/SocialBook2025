import React from 'react'

const ViewContact = () => {
  return (
    <>
      <div className='py-24'>
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-6xl hover:bg-gray-100">
          <div className="flex flex-col items-center py-10 px-5 bg-gray-200 w-min-xl">
            <div className='relative items-start -start-1/3'>
              <a href="/">
                <p className='pb-6'>back arrow icon</p>
              </a>
            </div>
            <img className="w-96 h-auto mb-3 rounded-full shadow-lg" src="/prof1.png" alt="Bonnie image" />
            <h5 className="mb-1 text-xl font-medium text-gray-900">Bonnie Green</h5>
            <span className="text-sm text-gray-500">Visual Designer</span>
            <div className="flex mt-4 md:mt-6">
              <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100">Rating 4</a>
            </div>
          </div>
          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex-row">
              <div className="grid grid-cols-4">
                <h5 className="col-span-3 mb-2 text-2xl font-bold tracking-tight text-gray-900">Contact</h5>
                <div>
                  <p className="mb-3 font-normal text-gray-700">edit icon delete icon</p>
                </div>
              </div>
            </div>
            <div className="flex-row">
              <div className='grid grid-cols-3'>
                <p className="col-span-2 mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <p className="mb-3 font-normal text-gray-700">Description</p>
              </div>
            </div>
            <div className="flex-row">
              <div className='grid grid-cols-3'>
                <p className="col-span-2 mb-3 font-normal text-gray-700">156</p>
                <p className="mb-3 font-normal text-gray-700">Age</p>
              </div>
            </div>
            <div className="flex-row">
              <div className='grid grid-cols-3'>
                <p className="col-span-2 mb-3 font-normal text-gray-700">Bigen</p>
                <p className="mb-3 font-normal text-gray-700">Gender</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewContact