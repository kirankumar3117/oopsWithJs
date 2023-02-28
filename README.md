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


