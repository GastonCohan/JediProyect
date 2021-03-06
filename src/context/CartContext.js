import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const clearCart = () => setCart([]);
    console.log(cart)
    const isInCart = id => cart.some(item => item.id === id);

    const addToCart = (item, quantity) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartElement => {
                if (cartElement.id === item.id) {
                    return { ...cartElement, quantity: cartElement.quantity + quantity }
                } else return cartElement;
            })
            setCart(newCart);
        } else {
            setCart(prev => [...prev, { ...item, quantity }]);
        }
    };

    // funcion filter (recibe el id)

    const removeProduct = (item) => {
        const newCart = cart.filter(elem => elem.id !== item.id)
        setCart(newCart)
    }

    return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, removeProduct }}>
        {children}
    </CartContext.Provider>
}