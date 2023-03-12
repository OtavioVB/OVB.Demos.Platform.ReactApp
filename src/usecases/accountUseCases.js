import CreateAccountInput from "./accountInputs";

export function createAccountUseCase(name, firstName, lastName, username, password, email){
    var account = new CreateAccountInput(name, firstName, lastName, username, password, email);

    if(account.email == null || account.username == null || account.firstName == null || account.lastName == null ||
        account.name == null || account.password == null){
            console.log("is not possible to create account");
    }

    console.log("Conta criada com sucesso!");
};