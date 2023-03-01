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