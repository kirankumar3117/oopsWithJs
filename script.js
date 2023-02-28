class Person {
    constructor(name, gender, birthYear) {

           this.name = name,
            this.gender = gender,
            this.birthYear = birthYear,
            this.caluculateAge = function () {
                return new Date().getFullYear() - birthYear;
            };

    }
}

let Jhon=new Person('John','male','2000');
console.log(Jhon)
console.log(Jhon.caluculateAge())