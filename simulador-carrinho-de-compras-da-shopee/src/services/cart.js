// CASOS DE USO
// >> adicionar item no carrinho
async function addItem(userCart, item) {
  userCart.push(item);
}

// >> Calcular o total
async function calculateTotal(userCart) {
 const result =  userCart.reduce((total, item) => total + item.subTotal(), 0);
 console.log(`\n 🎁Total: ${result}`)

}

// >> Deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)

    if(index !== -1 ){
        userCart.splice(index, 1)
    }
}
async function displayCart(userCart) {
    console.log("Shopee cart list")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}.${item.name} - ${item.price}|  ${item.quantity}x | Subtotal: ${item.subTotal()}` ) 
    });
}
// >> Remover um item
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((p)=>p.name === item.name)

    if(indexFound == -1){
        console.log(`Item não encontrado`)
        return;
    }
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity --;
        return
    }
    if(userCart[indexFound].quantity = 1){
        userCart.splice(indexFound, 1)
        return;
    }



}

export { addItem, calculateTotal, deleteItem, removeItem, displayCart };
