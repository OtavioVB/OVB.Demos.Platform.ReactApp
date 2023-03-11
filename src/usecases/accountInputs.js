export default class CreateAccountInput{
    constructor(name, firstName, lastName, username, password, email){
        this.name = name;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}