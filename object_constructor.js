let person= new Object();
    person.firstName="John";
    person.lastName= "Doe";
    person.email= "jdoe@example.com";
    person.info=function(){
        return`${this.firstName} ${this.lastName}, ${this.email}`;
    }

console.log(person.info());