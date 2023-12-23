import React from 'react'
import { Card } from './Card'

export function NewArrivalSection({items, onClickCard}) {
  return (
    <div className='flex-col mt-10'>
        <div className='flex-center'>
            <div className="text-4xl dark:text-white font-extrabold bg-[url('./assets/lines.png')]">New Arrivals</div>
        </div>
        <div className='justify-between mt-10 grid grid-cols-1 gap-y-24 gap-x-6 md:grid-cols-2 lg:grid-cols-[repeat(3,25%)] '>
            {
                items.map(item => <Card onClick={onClickCard} key={item.id} item={item} />)
            }
        </div>
    </div>
  )
}