import CreateAccountInput from "./accountInputs";

export function createAccountUseCase(name, firstName, lastName, username, password, email){
    var account = new CreateAccountInput(name, firstName, lastName, username, password, email);

    if(account.email == null || account.username == null || account.firstName == null || account.lastName == null ||
        account.name == null || account.password == null){
        return "Preencha todos os campos corretamente";
    }
};