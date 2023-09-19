//*    

export const totalPrice = (products) => {
    let sum = 0 
    products.forEach(products => sum += products.price)
    return sum
}
