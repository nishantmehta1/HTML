function Person(firstName, lastName, email){
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.info=function(){
        return `${this.firstName} ${this.lastName}, ${this.email}`;
    }
}
let person = new Person('John','Doe','jdoe@example.com');
console.log(person.info());