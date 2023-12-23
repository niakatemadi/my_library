import React from 'react'

export function Sidebar({ children, onClickClose, isOpen }) {
  return (
    <div>
        <div className={`overflow-scroll dark:bg-night space-y-2 p-5 fixed top-0 right-0 bg-white z-50 h-full w-full md:w-[50%] lg:w-[35%] transform transition ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <button onClick={onClickClose} className='absolute right-4 top-4 hover:cursor-pointer p-2 font-bold dark:text-white text-black'>X</button>
            {children}
        </div>
        <div onClick={onClickClose} className={`fixed left-0 top-0 bg-black opacity-50 z-20 h-full w-full ${isOpen ? "block" : "hidden"}`}></div>
    </div>
  )
}