import React from 'react'
import { Select } from './Select'
import { CiTrash } from "react-icons/ci";
import { SIZES, QTY } from "../constant";

export function CartItem({ item : {product, qty, size}, removeFromCart }) {

  return (
    <div className='dark:hover:bg-night-50 flex flex-col p-2 space-x-2 dark:bg-transparent bg-gray-50 hover:bg-[#DAFFA2] space-y-2 hover:cursor-pointer'>
        <div className='flex space-x-2'>
            <img className='h-24' src={product.src} />
            <div className='space-y-2'>
                <div className='font-bold dark:text-white'>{product.title}</div>
                <div className='text-sm text-gray-400'>{product.description}</div>
            </div>
            <div className='font-bold dark:text-white'>{product.price}$</div>
        </div>
        <div className='flex justify-between'>
            <div className='flex space-x-6 pl-[118px]'>
                <div>
                    <div className='font-bold dark:text-white'>QTY</div>
                    <Select className={"w-16 p-1 pl-2"} value={qty} title="" options={QTY}/>
                </div>
                <div>
                    <div className='font-bold dark:text-white' >SIZE</div>
                    <Select className={"w-16 p-1 pl-2"} value={size} title="" options={SIZES} />
                </div>
            </div>
            <button onClick={() => removeFromCart(product.id)}> <CiTrash size={25} className='text-black dark:text-white' /></button>
        </div>
    </div>
  )
}