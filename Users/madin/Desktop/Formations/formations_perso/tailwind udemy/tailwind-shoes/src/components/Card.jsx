import React from 'react'

export function Card({item, onClick}) {
  return (
    <div onClick={() => onClick(item)} className={`${item.className} flex relative max-w-xl transform transition hover:scale-105`}>
        <div className='p-8'>
            <div className='text-2xl font-bold'>{item.title}</div>
            <div className='mt-10 underline underline-offset-4 hover:cursor-pointer'>SHOP NOW+</div>
        </div>
        <img className='h-40 w-56 absolute left-[40%] top-5' src={item.src} />
    </div>
  )
}