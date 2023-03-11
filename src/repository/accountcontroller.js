import Axios from 'axios';
import CreateAccountInput from '../usecases/accountInputs';

export function createNewAccount(input){
    if(typeof(input) != typeof(CreateAccountInput)){
        console.log("Problems with the type of input create account.");
        return;
    }

    return Axios.post('https://teste.com.br', input, 
    {
        Headers: {
            'Content-Type': 'application/json'
        }
    });
}