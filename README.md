## opps With javascript 

- Object-oriented programming is a programming paradigm based on the concept of objects.
- paradigm means how we write and organize a code in a program 
- In Object-oriented programming, we represent real-world entities as an object.

### example-001

```

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

```
addNumbers(x, y){
    return x + y;
}
addNumbers(x, y, z){
    return x + y + z;
}
addNumber(10 ,20); //returns 30
addNumber(10, 20, 30); //returns 60
 
```

---


## Inheritance
### Constructor function 

- In Javascript **Inheritance** is possible with constructor functions 

- Constructor is a pattern in Javascript based on which we can create several objects
- In simple terms, a constuctor is simply a function which acts as a pattern or a template for creating objects.
- a constuctor function can be normal or an expression.

we can write this constructor methods in two ways using **class** or using **functions**

- In example-001 we created a base object or a blue print of Person Object
- And inherited those properties to john,merry and steve

---

![Person Object](https://i.ibb.co/mcppRJN/person-object.png)

---

