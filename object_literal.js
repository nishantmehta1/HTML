const { Console } = require("console");

const person={
    firstName:'John',
    lastName: 'Doe',
    email: 'jdoe@example.com',
    info:function(){
        return`${this.firstName} ${this.lastName}, ${this.email}`
    }
};
console.log(person.info());