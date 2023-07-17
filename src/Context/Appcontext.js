import { useState } from "react";
import { createContext } from "react";

export const Appcontext = createContext();

export default function AppcontextProvider({children}){
    
    const [cartItems,setCartItems] = useState([]);
    const [totalItems,setTotalItems] = useState(0);
    const [totalAmount,setTotalAmount] = useState(0);

    const addItem = (product)=>{
        const newCart = [...cartItems,product];
        setCartItems(newCart);
        setTotalItems(totalItems+1);
        setTotalAmount(totalAmount+product.price);
    }
    const removeItem = (product)=>{
        const newCart = cartItems.filter(item=>item.id!==product.id);
        setCartItems(newCart);
        setTotalItems(totalItems-1);
        setTotalAmount(totalAmount- product.price);
    }
    const value = {
        cartItems,
        setCartItems,
        addItem,
        removeItem,
        totalAmount,
        totalItems
    };

    return <Appcontext.Provider value = {value}>{children}</Appcontext.Provider>
}

