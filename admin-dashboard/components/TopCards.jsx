import React from 'react'

const TopCards = () => {
  return (
    <div className='grid lg:grid-cols-5 gap-4 p-4 bg-black'>
        <div className='lg:col-span-2 col-span-1 bg-neutral-900 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold text-white'>30+</p>
                <p className='text-gray-300'>Daily Genrated</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+2%</span>
            </p>
        </div>
        <div className='lg:col-span-2 col-span-1 bg-neutral-900 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold text-white'>1000+</p>
                <p className='text-gray-300'>Total Cutomers</p>
            </div>
            <p className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                <span className='text-green-700 text-lg'>+10%</span>
            </p>
        </div>
        <div className='bg-neutral-900 flex justify-between w-full border p-4 rounded-lg'>
            <div className='flex flex-col w-full pb-4'>
                <p className='text-2xl font-bold text-white'>6</p>
                <p className='text-gray-300'>Total Admins</p>
            </div>
        </div>
    </div>
  )
}

export default TopCards