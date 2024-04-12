import React, { createContext, useState } from 'react'
import products from '../Components/Assets/products'

export const Restauto = createContext(null);
const getDefautCart = ()=>{
    let cart = {}
    for (let index = 0; index < products.length+1; index++) {
        cart[index] = 0;
    }
    return cart
}
const RestautoMenu = (props) => {
    const [cartItems,setCartItems] = useState(getDefautCart());

    const addToCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const addToBadge = () => {
        let totalItem = 0;
        for (const item in cartItems){
            if(cartItems[item]> 0){
                totalItem+= cartItems[item];
            }
        }
        return totalItem;
    }

    

    const contextValue = {addToBadge,products,cartItems,addToCart,removeFromCart};

    return(
        <Restauto.Provider value={contextValue}>
            {props.children}
        </Restauto.Provider>
    )
}

export default RestautoMenu;
