import React, { createContext, useState } from "react";

export const ShopContext = createContext(null)



const Context = (props, {data}) => {

    const [cartItems, setCartItems] = useState()

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
export default Context