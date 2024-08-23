async function connectToDataBase(user, password) {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE){
        console.log(`conexão com banco de dados estabelecida!`)
    }else{
        console.log(`
            "falha de login, não foi possível conectar ao banco de daDos!
            `)
    }

}

export default connectToDataBase;