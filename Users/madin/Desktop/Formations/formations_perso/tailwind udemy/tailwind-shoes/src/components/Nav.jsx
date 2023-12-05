import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from "../assets/nike-logo.svg?react"
import { RxHamburgerMenu } from 'react-icons/rx';

import { useState } from "react";
export function Nav() {

  let ROUTES = ["Home","About","Services","Pricing","Contact"];
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

    return (
      <nav className="flex flex-wrap justify-between items-center">
        <a href="#">          
            <NikeLogo className="h-20 w-20" />  
        </a>
        <button onClick={() => setIsMobileMenuShown(!isMobileMenuShown)} className="rounded-lg focus:ring-2 focus:ring-gray-200 hover:bg-gray-100 lg:hidden"><RxHamburgerMenu size={25} /></button>
        <div className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}>
          <ul className="rounded-lg p-4 lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent border-gray-100 lg:border-none text-lg ">
            {
              ROUTES.map((route,i) => {
                return <li className={`rounded cursor-pointer px-3 py-2 ${i == 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500":"hover:bg-gray-100"}  `} key={route}>{route}</li>
              })
            }
          </ul>
        </div>
        <div className="fixed left-4 bottom-4 lg:static">
          <div className="cursor-pointer flex-center h-12 w-12 rounded-full bg-white shadow-md">
            <TbShoppingBag />
          </div>
        </div>
      </nav>
    );
  }
  