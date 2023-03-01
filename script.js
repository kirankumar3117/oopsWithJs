// class Person {
//     constructor(name, gender, birthYear){

//         this.name = name,
//          this.gender = gender,
//          this.birthYear = birthYear
//     }

//     caluculateAge() {
//         return new Date().getFullYear() - this.birthYear;
//     };
//     static welcome(){
//         console.log("Welcom you ")
//     }
// }
// // Person.prototype.caluculateAge=function () {
// //     return new Date().getFullYear() - this.birthYear;
// // };
// Person.welcome();
// let john=new Person('John','Male','1990');
// let merry=new Person('Merry','Female',1995);
// let steve=new Person('Steve','Male',1985);


// console.log(john,merry,steve)
// console.log(john.caluculateAge(),merry.caluculateAge(),steve.caluculateAge())


// //creating a person constructor
// let Person=function(name,gender,birthYear){
//     this.name=name,
//     this.gender=gender,
//     this.birthYear=birthYear
// }

// Person.prototype.caluculateAge=function(){
//     return new Date().getFullYear() - this.birthYear
// }

// // creating a employee constructor
// let Employee=function(name,gender,birthYear,empId,salary){
//     //employee inhering the properties from person
//     //here this as a first argument pointing to kiran 
//     Person.call(this,name,gender,birthYear);
//     this.empId=empId,
//     this.salary=salary
// }

// //we need do this for accessing prototype properties of person
// // before defining prototype for employee 
// Employee.prototype=Person.prototype;

// Employee.prototype.caluculateAnualSalary=function(){
//     return 12 * this.salary;
// }


// let kiran=new Employee('kiran','male',2000,'kvopk154',1000);

// // now we can have access to person prototype prperties too
// console.log(kiran)


// Inheritance between two classes

class Person{
    constructor(name,gender,birthYear){
        this.name=name;
        this.gender=gender;
        this.birthYear=birthYear;
    }
    caluculateAge(){
        return new Date().getFullYear() - this.birthYear;
    }
}

class Employee extends Person{
    constructor(name,gender,birthYear,empId,salary){
        // super must call before using this and after defining constructor
        // super( ) is nothing but calling the Person Object
        super(name,gender,birthYear);
        this.empId=empId;
        this.salary=salary;
    }

    caluculateAnualSalary(){
        return 12 * this.salary;
    }
}

let kiran=new Employee('kiran','male',2000,'kvopk154',1000);

console.log(kiran)
console.log(kiran.caluculateAge())
console.log(kiran.caluculateAnualSalary())