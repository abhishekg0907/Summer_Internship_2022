# Javascript quiz  (Basic Level - 1)
### _**Theory**_

1. What is JavaScript ?
    * JavaScript is a text-based programming language used both on the client-side and server-side that allows us to make web pages interactive.

2. What is the difference between b/w let and var ?
    * `let` is used to create local scope variables while `var` is used to create global scoped variables.
3. Why do we prefer const over var ?
    * Because `const` variables can neither be updated nor re-declared.
4. What is the use of javascript in web browsers ?
    * JavaScript gives web pages interactive elements that engage a user.
5. What are Objects ?
    * An `object` is a stand alone entity, with properties and type.
6. What is an array and how is it different from an Object in Javascript ?
    * `Arrays` are a special type of variable that is also mutable and can also be used to store a list of values.
    * `Objects` represent **things** with characteristics (aka properties), while `Arrays` create and store lists of data in a single variable.
7. What is a function ?
    * It is a block of code that can be used repeatedly to reduce redundancy in program and to improve readability and scalability.
8. How can we implement call by value and call by reference in Javascript?
    * Implementation of `Call by Value`
    ```Javascript
	var a = 5;
	var b;
	b = a;
	a = 3;
    
	console.log(a);
	console.log(b);
    ```
    * Implementation of `Call by Reference`
    ```Javascript
	var c = { greeting : 'Welcome' };
	var d;
	d = c;

	c.greeting = 'Hello World';
	console.log(c);
	console.log(d);
    ```
9. What are the primitive data types in Javascript ?
    * The primitive data types in JavaScript are:
        * Number
        * Boolean
        * String
        * Null
        * Undefined
        * Symbol
        * BigInt
10. What is DOM ?
    * `DOM` stands for `Document Object Model`. In the world of web, all HTML webpages are referred to as documents. The Document Object Model represents each of these web pages in a tree-like structure to make it easier to access and manage the elements.
11. Why do we need DOM ?
    * The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
### _**Programs**_
1. Average of array nums in Javascript ?
```Javascript
function avg(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++)
    sum += arr[i];
    return sum/arr.length;
}
console.log(avg([1,2,3,4,5]));
```
2. Swap two numbers by reference ?
```Javascript
function swap(a,b){
    let temp = a;
    a = b;
    b = temp;
    return {a,b}
}
console.log(swap(1,2));
```
3. Print the fibonacci sequence ?
```Javascript
function fib(number){
    let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
}
fib(10);
```
4. Sort an array by both ascending and descending order ?
```Javascript
function sortArray(arr){
	let ascending = new Int32Array(arr).sort()
	let descending = new Int32Array(arr).sort().reverse()
	return {
		"ascending": Array.from(ascending),
		"descending": Array.from(descending)
	}
}

console.log(sortArray([3, 5, 29, 4, 10]))
```
5. Show a variable value in an HTML webpage using DOM ?
```Javascript
let msg = "Hello World"
document.write(msg)
```