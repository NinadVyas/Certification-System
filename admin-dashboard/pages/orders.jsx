import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { data } from '../data/data.js';

const orders = () => {
  return (
    <div className='bg-black min-h-screen'>
       <div className='flex justify-between px-4 pt-4 bg-black text-white font-bold'>
        <h2>Publisher Dashboard</h2>
        <h2>Welcome Back, Publisher</h2>
    </div>
      <div className='p-4'>
        <div className='w-full m-auto p-4 border rounded-lg bg-black overflow-y-auto'>
          <div className='my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'>
            <span className=' text-white'>Total Certificate</span>

            <span className='hidden md:grid text-white'>Last Order</span>
          </div>
          <ul>
            {data.map((order, id) => (
              <li
                key={id}
                className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 items-center justify-between cursor-pointer'
              >
                <div className='flex'>
                  <div className='bg-blue-100 p-3 rounded-lg'>
                    <FaShoppingBag className='text-blue-800' />
                  </div>
                  <div className='pl-4'>
                    <p className='text-gray-800 font-bold'>
                      {order.total.toLocaleString()}
                    </p>
                    <p className='text-gray-800 text-sm'>{order.name.first}</p>
                  </div>
                </div>
                <p className='hidden md:flex'>{order.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default orders;
