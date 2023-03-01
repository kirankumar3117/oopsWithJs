//creating a person constructor
let Person=function(name,gender,birthYear){
    this.name=name,
    this.gender=gender,
    this.birthYear=birthYear
}

Person.prototype.caluculateAge=function(){
    return new Date().getFullYear() - this.birthYear
}

// creating a employee constructor
let Employee=function(name,gender,birthYear,empId,salary){
    //employee inhering the properties from person
    //here this as a first argument pointing to kiran 
    Person.call(this,name,gender,birthYear);
    this.empId=empId,
    this.salary=salary
}

//we need do this for accessing prototype properties of person
// before defining prototype for employee 
Employee.prototype=Person.prototype;

Employee.prototype.caluculateAnualSalary=function(){
    return 12 * this.salary;
}


let kiran=new Employee('kiran','male',2000,'kvopk154',1000);

// now we can have access to person prototype prperties too
console.log(kiran)
