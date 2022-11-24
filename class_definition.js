class Person{
    constructor(firstName, lastName, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
    }
    info(){
        return`${this.firstName} ${this.lastName}, ${this.email}`;
    }
}
let Object