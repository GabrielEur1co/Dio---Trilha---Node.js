import chalk from "chalk";

const PromptSchemaQrcode = [
    {
        name:"link",
        description:chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name:"type",
        description:chalk.yellow.bold("Ecolha entre o tipo 1) Imagem ou 2) Terminal"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha invalida, esolha entre 1 ou 2."),
        require: true
           
       
    }
];

export default PromptSchemaQrcode;


1



