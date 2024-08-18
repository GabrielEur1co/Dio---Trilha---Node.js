import createItem from "./services/item.js";
import * as cartSevice from "./services/cart.js"

const cart = [];
const wishList = [];

console.log("Wellcome to the yout Shopee Cart!");


//criando os itens:
const item1 = await createItem("Geladeira", 1897.99, 2);
const item2 = await createItem("hotwhells ferrari", 20.99, 1);


//Adicionando itens ao carrinho:
await cartSevice.addItem(cart, item1)
await cartSevice.addItem(cart, item2)

//Deletando o item:
// await cartSevice.deleteItem(cart, "hotwhells ferrari")

//Remove uma quantidade de item:
cartSevice.removeItem(cart, item1)
cartSevice.removeItem(cart, item1)

//Imprimindo o carrinho no terminal:
await cartSevice.displayCart(cart)



//Caculando o valor total do carrinho:
await cartSevice.calculateTotal(cart);
