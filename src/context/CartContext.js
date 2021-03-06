import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {
  
    const [cart, setCart] = useState([])

    const isInCart = (id) => cart.find(producto => producto.id == id)


    const addToCart = (producto, cantidad) => {
        const newCart = [...cart]
        
        const productoEnCart = isInCart(producto.id)

        if(productoEnCart){
            newCart[newCart.findIndex((prod) => prod.id == productoEnCart.id)].quantity += cantidad
        
            setCart(newCart)
            return
        }

        producto.quantity = cantidad
        setCart([...newCart, producto])

    }

    const deleteFromCart = (id) => {
        const newCart = [...cart]

        const productoEnCart = isInCart(id)

        if(!productoEnCart){
            return
        }
        const deleteProduct = newCart.filter((prod) => prod.id !== id)

        setCart(deleteProduct)
    }

    const deleteCart = () => setCart([])

    console.log(cart);

    return (
    <CartContext.Provider value={{
        cart,
        addToCart,
        deleteFromCart,
        deleteCart,
        setCart,
    }}> 
    {children} </CartContext.Provider>
    )
}

export default CartContextProvider