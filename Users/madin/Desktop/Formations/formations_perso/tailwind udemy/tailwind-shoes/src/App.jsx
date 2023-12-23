import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";
import { SHOE_LIST } from "./constant";
import { NewArrivalSection } from "./components/NewArrivalSection";
import { Sidebar } from "./components/Sidebar";
import { useEffect, useState } from "react";
import { Cart } from "./components/Cart";
import { BiSun, BiMoon } from "react-icons/bi"
export function App() {

const [isSidebarOpen, setIsSidebarOpen]=useState(false);

const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
console.log("currentShoe")
console.log(currentShoe)
console.log("currentShoe")

const [cartItems, setCartItems] = useState([]);

useEffect( () => {
  const isDarkMode = localStorage.getItem("isDarkMode");
  if (isDarkMode === "true"){
    window.document.documentElement.classList.add("dark");
  }
},[])

const addToCart = (product, qty, size) => {
  
  console.log("product");
  console.log(product);
  console.log(qty);
  console.log(size);
  console.log("product");

  if(qty && size){

    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex( item => item.product.id === product.id);
    
    if(existingItemIndex > -1){
      console.log("existingItemIndex")
      console.log(existingItemIndex)
      console.log(product);
      console.log("existingItemIndex")
      updatedCartItems[existingItemIndex].qty = qty;
      updatedCartItems[existingItemIndex].size = size;
    }else{
      updatedCartItems.push({product, qty,size});
    }

    setCartItems(updatedCartItems);
  }
}

const removeFromCart = (productId) => {
  
  console.log("removeFromCart");
  console.log(productId);
  console.log("removeFromCart");
  const updatedCartItems = [...cartItems];
  const existingItemIndex = cartItems.findIndex( item => item.product.id === productId);
  updatedCartItems.splice(existingItemIndex,1);

  setCartItems(updatedCartItems);
}

const toggleDarkMode = () => {
  window.document.documentElement.classList.toggle("dark");

  localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"))
}

  return (
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
      <Nav onClickShoppingButton={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      {/* <Card item={SHOE_LIST[0]} /> */}
      <NewArrivalSection items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar onClickClose={() => setIsSidebarOpen(false)} isOpen={isSidebarOpen} >
        <h2 className="text-2xl font-bold mb-10 dark:text-white">Panier</h2>
        <Cart removeFromCart={removeFromCart} cartItems={cartItems} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button onClick={toggleDarkMode} className="shadow-lg bg-night-50 text-white rounded-full px-4 py-2 dark:bg-white dark:text-night">
          <BiSun className="hidden dark:block"/> 
          <BiMoon className="dark:hidden"/>
        </button>
      </div>
    </div>
  );
}
