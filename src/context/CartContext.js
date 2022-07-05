import React, { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + product.price)
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
    }

    const deleteProduct = (product) => {
        const arrayRest = cartListItems.filter( (cartProduct) => cartProduct.id !== product.id)
        setCartListItems(arrayRest)
        setTotalPrice(totalPrice - product.price)
    }
    const cleanCartProducts = () => {
        setTotalPrice(0)
        setCartListItems([])
    }
    const cartPrice = cart.reduce((acc, current) => {
        return acc + current.price * current.amountInCart
    }, 0);

    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        cleanCartProducts,
        deleteProduct,
        cartPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }