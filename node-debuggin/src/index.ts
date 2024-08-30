import {getBaseEmail} from "./services/email"

(async function main() :Promise<void> {
    console.log(await getBaseEmail("Recrutador"));
    
    console.log('Finalizado')
    console.log('...')
    
})();