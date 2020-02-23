export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);
    if (existingCartItem) {
        const updatedCartItems = cartItems.map(cartItem => 
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem);
        return updatedCartItems;
    }

    return [...cartItems,  {...cartItemToAdd, quantity: 1 }];
};