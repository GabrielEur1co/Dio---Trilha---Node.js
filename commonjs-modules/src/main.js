const produts = require('./services/products')

async function main() {
    console.log(`Olá meu nome é system`)
    produts.getFullName(2314, "ovo");
}    

main();