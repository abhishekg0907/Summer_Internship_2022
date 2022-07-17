# Javascript quiz  (Basic Level 4)
### _**Theory**_
1. What are anonymous functions in JavaScript ?
    * Anonymous Function is a function that does not have any name associated with it.
2. Explain strict comparison and Abstract comparison in javascript?
    *  `==` is used for `abstract comparison` between two variables irrespective of the datatype of variable. `===` is used for `strict comparision` between two variables but this will also check datatype.
3. Difference b/w arrow functions and regular functions ?
    * Syntax of `regular` functions:-
    ```js
    let x = function function_name(parameters){
    // body of the function
    };
    ```
    * The syntax of `arrow` functions:-
    ```js
    let x = (parameters) => {
	// body of the function
    };
    ```
4. What is Hoisting in JavaScript ?
    * JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
    * It allows functions to be safely used in code before they are declared.
5. JavaScript is a garbage collected programming language, explain how ?
    * JavaScript utilize a form of automatic memory management known as `Garbage collection (GC)`. The purpose of a garbage collector is to monitor memory allocation and determine when a block of allocated memory is no longer needed and reclaim it
6. Explain Shallow copy vs Deep copy in Javascript ?
    * A `Deep copy` means that all of the values of the new variable are copied and disconnected from the original variable.
    * A `Shallow copy` means that certain (sub) values are still connected to the original variable.
7. What is Object.freeze ?
    * The `Object.freeze()` method freezes an object.
    * A frozen object can no longer be changed i.e. freezing an object prevents new properties from being added to it.
### _**Programs**_
1. Write a function that generates a random number between two ranges, -100 to 0 and 800 to 900.

```js
function radomInTwoRange(min1,max1,min2,max2)
{
let x = Math.floor(Math.random()*2)
if(x){
    x = Math.floor(Math.random()*(max1-min1)) + min1;
}
else{
    x = Math.floor(Math.random()*(max2-min2)) + min2;
}
return x;
}
console.log(radomInTwoRange(-100,0,800,900));
```