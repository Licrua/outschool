import { PayLoadType } from '@/slices/cartSlice';
import Image from 'next/image';
import React from 'react';

const OrderList = ({ cart }: { cart: PayLoadType[] }) => {
  const finalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div className="lg:w-2/3 bg-base-100 shadow-2xl ring-1 rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Your Orders</h2>
      <ul className="space-y-3 overflow-scroll p-5 h-40">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between max-w-[500px] gap-3 items-center bg-base-200 p-3 rounded-lg"
          >
            <Image
              width={100}
              height={50}
              src={item.image}
              className=" me-2 sm:me-0 rounded"
              alt="prod"
            />
            <div className='max-w-[200px]'>
              <h3 className="font-medium">
                <strong>Name:</strong>
              </h3>
              <p className=' truncate'>{item.title}</p>
            </div>
            <div>
              <strong>Price:</strong>
              <p>{item.price}$</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-5 mt-10">
        <p className="font-bold">Final Price:</p>
        <span>{finalPrice.toFixed(1)}$</span>
      </div>
    </div>
  );
};

export default OrderList;
