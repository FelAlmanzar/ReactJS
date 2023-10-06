import React, { createContext, useContext, useEffect, useState } from 'react';
import { Cart } from '../components/Cart';

const CartContext = createContext()


export function CartProvider({children}){

    const [cart, setCart] = useState([]);


    const addItem = (item, quantity) =>{

        const existingItem = cart.find((cartItem) => cartItem.id ===item.id);

        if (existingItem) {

            existingItem.quantity += quantity;
            setCart([...cart]);
        } else {

            const newItem = { ...item, quantity};
            setCart([...cart, newItem]);
        }
    };

    const removeItem =(itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    }

    const clear = () => {
        setCart([]);
    }

    const isInCart = (itemId) => {
        return cart.some((item) => item.id === itemId);
    }

    const precioTotal = () =>{
        return cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)
    }

    const cantidadEnCarrito = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, precioTotal, cantidadEnCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart () {
    return useContext(CartContext)
}