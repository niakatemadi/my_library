import React from 'react'
import { CartItem } from './CartItem'

export function Cart({cartItems, removeFromCart}) {
  return (
    <ul className='space-y-5'>
    {
        cartItems.map((cartItem) => {
          return (<li className='list-none' key={cartItem.product.id}>{<CartItem removeFromCart={removeFromCart} item={cartItem} />}</li>)
        })
    }
    </ul>
  )
}