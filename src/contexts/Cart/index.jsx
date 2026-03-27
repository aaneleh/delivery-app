import { useContext, createContext, useState } from 'react';

const CartContext = createContext({});

export function useCart(){
    return useContext(CartContext);
}

export function CartProvider( { children } ) {
    const [ItensCart, setItensCart] = useState([]);
    
    function add(product){
        setItensCart( currentCart => {
            //procura o id especificado, se não achar adiciona o produto
            if(currentCart.find(item => item.product.id === product.id) == null){
                return [...currentCart, { product }]
            } 

            return [...currentCart]
        })
    }

    function remove(id){
        setItensCart( currentCart => {
            //procura o item e, se encontrar remove do Cart
            if(currentCart.find(item => item.product.id === id)){
                //seta o carrinho para todos os items com um id diferente do id especificado para removê-lo da lista
                return currentCart.filter(item => item.product.id !== id);
            } 
            return currentCart
        })
    }

    return (
        <CartContext.Provider value={ { ItensCart, add, remove } }>
            { children }
        </CartContext.Provider> 
    )
}