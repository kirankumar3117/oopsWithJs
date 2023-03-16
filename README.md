## opps With javascript 

- Object-oriented programming is a programming paradigm based on the concept of objects.
- paradigm means how we write and organize a code in a program 
- In Object-oriented programming, we represent real-world entities as an object.

### example-001

```js

let user = {
    name:'John',
    role:'admin',
    access:'read-write'
}

addUser(){
    //Logic to add user
}

removeUser(){
    //Logic to remove user
}

```
- representing a real user as an object 
- An object can have **data** and **behavier**

- The properties of an object called data

### example-001-1

```
name:'John',
role:'admin',
access:'read-write'
```
 
- Methods of an object called it's **behavier**

### example-001-2

```
addUser(){
    //Logic to add user
},
removeUser(){
    //Logic to remove user
}

```

***We use Objects to pack data and behavier of real-world entity all in big block***

- Objects are self contained piece or block of code and we use them as building block of our application and makes them interact with one another.

![Object with instances](https://i.ibb.co/2MV6gMz/Capture.png)

 - Here **John** **Merry** **steve**  are the instances of the **person** Object.
 - and person objects acts as a **blue print** for the instances.


 ---

  

 ## Pillars of an Object-Oriented Programming
 - #### Inheritance
 - #### Encapsulation
 - #### Abstraction
 - #### Polymorphism


 ---



 ## Inheritance

 - Inheritance is a mechanism that allows us to create new classes based on existing class.

### example-002

![Inheriting person Object in Employee Object](https://i.ibb.co/x7yCHqK/Capture.png)

- In this example **Employee Object** can Inherit the properties of **person Object** 

![Inherited properties of Employee Object](https://i.ibb.co/cCGNPvJ/Capture.png)

- With inheritance, we can reuse an existing code without repeating a code.
- Inheritance is the first pillar of Object Oriented Programming.


---


## Encapsulation
- Encapsulation is the process of hiding data from outside world.

![Employee Object](https://i.ibb.co/7kYDG2f/Capture.png)

- Suppose the salary property can only be accessible in the **Employee Object**

- In this **Employee Object** **caluculateSalary()** method can access salary but outside the **Employee Object** no other Object or method can access the salary property.


---


## Abstraction 

- Abstraction is a way of hiding the implementation details and showing only the functionality to the user.
- In other words, it ignores the irrelevent details and shows only the required one.

### example-003

![Abstraction Example](https://i.ibb.co/KLBjV0p/Capture.png)

- In the above example **Permenent employee** and **Part-time employee** are inheriting the properties from **Employee** Object.
- **Perment employee**,**Part-time emploee** are the child Objects of a base Object **Employee**
- Here, in the **Employee** Object we have name, salary properties and **getSalary()** method, this getSalary() method is just declared **Employee Object**.
- In **Part-time emploee** and in **Permenent employee** we have different type of salary and getSalary() method return differently in both Object.
- But while showing In the **Employee Object** we only show the getSalary() method not the theme or what it returns based what Object inherited it's properties. On this level this is what **abstraction** is.


---


## Polymorphism

- Polymorphism means different forms. In Object-Oriented programming, we can write methods with same name but different implementation.

### example-004

```js
addNumbers(x, y){
    return x + y;
}
addNumbers(x, y, z){
    return x + y + z;
}
addNumber(10 ,20); //returns 30
addNumber(10, 20, 30); //returns 60

//In javascript polymorphism is a different scenario.
 
```

---


## Inheritance
### Constructor function 

- In Javascript **Inheritance** is possible with prototype for that we need a constructor function to make a base Object

- Constructor is a pattern in Javascript based on which we can create several objects
- In simple terms, a constuctor is simply a function which acts as a pattern or a template for creating objects.
- a constuctor function can be normal or an expression.
- A constructure function given name must be in pascalcase notation

we can write this constructor methods in two ways using **class** or using **functions**

- In example-001 we created a base object or a blue print of Person Object
- And inherited those properties to john,merry and steve

---

![Person Object](https://i.ibb.co/mcppRJN/person-object.png)

---


- Value for the constuctor comes as an argument for the function

#### Creating this Person Object using Constuctor function Before ES6

```
let Person=function(name, gender, birthYear) {
           this.name = name,
            this.gender = gender,
            this.birthYear = birthYear,
            this.caluculateAge = function () {
                return new Date().getFullYear() - birthYear;
            };
}
```
#### Creating this Person Object using Constuctor class With ES6

```
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

```

#### Creating instances from the blupring of Person

```
// Creating instances
let john=new Person('John','Male',1990);
let merry=new Person('Merry','Female',1995);
let steve=new Person('Steve','Male',1985);

//Accessing the instances

console.log(john,merry,steve)
console.log(john.caluculateAge(),merry.caluculateAge(),steve.caluculateAge())
 
```

#### Here You Can See How Object Created
- It's going to create the object under Person name cause this are the instances of the **Person Object**

![Person Object Instances Output](https://i.ibb.co/2hgJy3R/person-output.png);

## The new Operator

- A **new** operator does three things while creating an object using function constructor.

1. It creates An empty object.

```
let john={}
```
2. It also makes sure that the **this** variable in function constructor points to the newly created empty object.
```
// It make sure that this in blue print object points to newly created object that is john
this=john

//It is just like 

john.name='John'


```
3. Finally, It also returns the object from the function constuctor.

```
//Once the properties and methods set on that object it return that object .
// this happence internally so we don't have to write explicitly.
```

- The definition of the caluculateAge method is same for all the instances

```
 return new Date().getFullYear() - birthYear;
```

- this is the violation of the **dry principle** (do not repeat yourself)

- This problem can be resolved using inheritance


## Prototype

- Each and every Javascript Object has a **prototype property**
- Inheritance in Javascript is achived using this prototype property
- When we attach a property or a method to the prototype property of that object, those properties and methods can be inherited by the instantated object.

#### example-005

![Prototype persn Object](https://i.ibb.co/19L6yPk/person-prototype-property.png)

- In the above figure we see **Person Object** not defining the **caluculateAge()** method but it is attched to it's *Prototype property*
- Now all the instnaces can have access to the *prototype property* of **Person Object**
- This means all the instances are inheriting the **caluculateAge()** from the *prototype property* of Person Object

```
class Person {
    constructor(name, gender, birthYear){

        this.name = name,
         this.gender = gender,
         this.birthYear = birthYear
    }
}

//defining a prototype property 

Person.prototype.caluculateAge=function () {
    return new Date().getFullYear() - this.birthYear;
};
```
- Now we can see the output for this not contains *caluculateAge()* method but we can access it 

```
console.log(john,merry,steve)
console.log(john.caluculateAge(),merry.caluculateAge(),steve.caluculateAge())
```

![Person-prototype-property-inherting-instances-output](https://i.ibb.co/Lgg04v4/prototype-property-output.png)

- This is how we do inheritance in javascript

- we can see instnaces can contain a prototype of **Person Object**

![Prototype of John Instance](https://i.ibb.co/0h1ypn8/001.png)

- but **Prototype Object** which is the base Object can also have **prototype property**
- That means **Person Object** is also an instance. but instance of what..?

## Prototype chaining

- **Person Object** is also a prototype of **Object Constructor**

- Any object we create which in an instance of **Object Constructor**

```
// for suppose
let person={
    name:'kiran',
    birthYear:2000,
    gender:'male'
}

when we create an Object this is what happence in back of javascript

// let person=new Object(); empty Object
//person.name='kiran'
//person.birthYear=2000
//person.gender='male'
```

- person  instanceof Object //true

```
console.log(person.hasOwnProperty('name'))  //true
// this hasOwnProperty is inherited from Object Constructor. that's why we can access that from our person object
```

- same thing happens to our **Person Object**
![prototype example](https://i.ibb.co/sgVnVHZ/002.png)

- With this prototype chaining **john Object** can access the **Object Constructor** prototype properties.

![jon object accessing the prototype of object constructor](https://i.ibb.co/2tL7qgP/003.png)

- same thing happens with array
```
let arr=[10, 20, 30]
// it creates
// new Array()
//having all the methods like 
arr.push(40)
```

### Getter and Setter Properties

- Besides the data properties an Object can have **Accessor** Properties, this are methods that gets or sets the value of an Object property

1. getter property : read objects property value
2. setter property : set an objects property value

- Using set and get keywords we create this methods

```
let kiran={
    name:'kiran',
    birthYear:2000,
    anualSalary:12000,

    get getName(){
        return this.name;
    }

    set setName(val){
        return this.name=val;
    }
}

// now we can access this getName property as it like any other property 

console.log(kiran.getName); //kiran

//we don't need to specifie this as a method, we are using get it convert it as it's own property

kiran.setName='kiran kumar';

console.log(kiran.getName); //kiran kumar
```

#### we do can access an d modify directly, but why use setter and getter
- When we want don't show some properties, we use this get and set properties so that it can't be accessed directly
- In  **OOP** we useally hide data from the outside world 
- **ENCAPSULATION** : with this we hide data from the outside world.
- So, when data is hiding we use this accesser properties to read and set the value.


## Static methods
- Static methods are those methods which are associated with **class** and not with **instances**

```js
class Person {
    constructor(name, gender, birthYear){

        this.name = name,
         this.gender = gender,
         this.birthYear = birthYear
    }

    caluculateAge() {
        return new Date().getFullYear() - this.birthYear;
    };
    static welcome(){
        console.log("Welcom you ")
    }
}

// Person.welcome() 

//for function consctructor
let Person=function(name, gender, birthYear) {
        this.name = name,
         this.gender = gender,
         this.birthYear = birthYear

}

//we create static method like this

Person.welcome=function(){
    console.log("Welcome you")
}

//Person.welcome()
```

- Static methods are only accessible by it's base object not by instances.

## Object.create() 

![Object.create() method](https://i.ibb.co/qgCqLWB/Object-create-method.png)

## function constructor to function constructor inheritance

```
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

```

## Inheritance between two classes

```
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
```
