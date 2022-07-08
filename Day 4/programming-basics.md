# Programming Basics

## Classes and Objects

- Classes are a template for creating objects. They encapsulate data with code to work on that data.
- ### Class declarations
  ```
  class ClassMates{
      constructor(name,age){
          this.name=name;
          this.age=age;
      }
      displayInfo(){
          return this.name + "is " + this.age + " years old!";
      }
  }
  ```
- ### Class Instance creation
  ```
  let classmate = new ClassMates("Mike Will",15);
  ```

## Functions

- Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.
- ### Function declarations

  ```
  function square(number) {
      return number * number;
  }

  or

  const square = (number) => {
      return number * number;
  }
  ```

## Control Flow

- Control flow is the order in which statements are executed in a program. The default control flow is for statements to be read and executed in order from left-to-right, top-to-bottom in a program file.
- Control structures such as conditionals (if statements and the like) alter control flow by only executing blocks of code if certain conditions are met. These structures essentially allow a program to make decisions about which code is executed as the program runs.

  ```
      const person1 = {
          name:'Jack',
          age: 29
      }

      let person2 = null
      var person2age = person2 && person1.age
      console.log(person2age) // null

      person2age = true && person2 && person1.age
      console.log(person2age) // null

      person2age = true || person2 && person1.age
      console.log(person2age) // true

      person2age = true && person2 || person1.age
      console.log(person2age) // 29
  ```

  - ### Logical Operator

    ```
    Logical OR operator

    true || false;        // true
    10 > 5 || 10 > 20;    // true
    false || false;       // false
    10 > 100 || 10 > 20;  // false

    Logical AND operator

    true && true;      // true
    1 > 2 && 2 > 1;    // false
    true && false;     // false
    4 === 4 && 3 > 1;  // true

    Logical NOT operator

    let lateToWork = true;
    let oppositeValue = !lateToWork;

    console.log(oppositeValue);
    // Prints: false
    ```

  - ### Ternary Operator
    ```
    let price = 10.5;
    let day = "Monday";
    day === "Monday" ? price -= 1.5 : price += 1.5;
    ```
  - ### Comparison Operators
    - === strict equal
    - !== strict not equal
    - `>` greater than
    - `>=` greater than or equal
    - < less than
    - <= less than or equal
    ```
    1 > 3       // false
    3 > 1       // true
    250 >= 250  // true
    1 === 1     // true
    1 === 2     // false
    1 === '1'   // false
    ```
  - ### Truthy and Falsy
    - In JavaScript, values evaluate to true or false when evaluated as Booleans.
      - Values that evaluate to true are known as truthy
      - Values that evaluate to false are known as falsy
    - Falsy values include false, 0, empty strings, null undefined, and NaN. All other values are truthy.
