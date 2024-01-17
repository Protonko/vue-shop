import type { Sneaker } from './Sneaker'

export interface CartProvider {
    cartItems: Sneaker[]
    removeItemFromCart: (id: Sneaker['id']) => void
    resetCart: () => void
    addItemToCart: (item: Sneaker) => void
}