/**
 * Mock function for order creation
 */
export const createOrder = () => {
    return new Promise(resolve => setTimeout(() => resolve('Success'), 500))
}