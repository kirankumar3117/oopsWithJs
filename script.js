class Person {
    constructor(name, gender, birthYear){

        this.name = name,
         this.gender = gender,
         this.birthYear = birthYear,
         this.caluculateAge = function () {
             return new Date().getFullYear() - birthYear;
         };
    }
}

let john=new Person('John','Male','1990');
let merry=new Person('Merry','Female',1995);
let steve=new Person('Steve','Male',1985);


console.log(john,merry,steve)
console.log(john.caluculateAge(),merry.caluculateAge(),steve.caluculateAge())