import connectToDataBase from "./database/data.js";


(async function main() {
    await connectToDataBase(process.env.USERDATABASE, process.env.PASSWORDDATABASE)
})();