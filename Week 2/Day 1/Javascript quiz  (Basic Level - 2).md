# Javascript quiz  (Basic Level - 2)
### _**Theory**_

1. Why do we use functions in JavaScript ?
    * Because it provides reusability of code and helps to improve readability and scalability of program.
2. What is Function Invocation ?
    * Function Invocation is used to executes the function code and it is common to use the term `call a function` instead of `invoke a function`. The code inside a function is executed when the function is invoked.
3. Does a function behave like an object in Javascript ? Prove it by an example.
    ```Javascript
        function message() {
        console.log("Hello World");
    }

    console.log(typeof message);        
    console.log(message instanceof Object); 
    ```
4. What are Events in Javascript ?
    * An event in JavaScript is defined as `things that happen to HTML elements`.
5. What is a string ?
    * The String object is used to represent and manipulate a sequence of characters.
6. What is an array? Is it static or dynamic in Javascript?
    * An array is an ordered list of values. Each value is called an element specified by an index. An JavaScript array has the ability to hold values of mixed types.
    * JavaScript is not typed dependent so there is no static array. JavaScript directly allows array as dynamic only.
7. Difference between Map and Set ?
    * Set is one dimensional unique array, however Map is 2D and has key-value pair, where key shall be unique.
8. Difference between Array and Map ?
    * An `array` is an ordered list of values. Each value is called an element specified by an index while `map` is used to create a `key : value` pair.
9. What are array methods ? List a few names ?
    * JavaScript Array Methods are as follows :-
        * JavaScript Array length
        * JavaScript Array reverse()
        * JavaScript Array sort()
        * JavaScript Array fill()
        * Javascript Array join()
        * Javascript Array toString()
        * JavaScript Array pop()
        * JavaScript Array shift()
10. In how many ways can we traverse through an array in Javascript ?
    * A few traversal ways are as follows :-
    ```Javascript
    array = [ 1, 2, 3, 4, 5, 6 ];
    for (index = 0; index < array.length; index++) {
        console.log(array[index]);
    }
    ```
    ```Javascript
    index = 0;
    array = [ 1, 2, 3, 4, 5, 6 ];
    
    while (index < array.length) {
        console.log(array[index]);
        index++;
    }
    ```
    ```Javascript
    index = 0;
    array = [ 1, 2, 3, 4, 5, 6 ];
    
    array.forEach(myFunction);
    function myFunction(item, index)
    {
        console.log(item);
    }
    ```
### _**Programs**_
1. Reverse an array ? Input: [1, 2, 3, 4, 5, 6]
```Javascript
let arr = [1, 2, 3, 4, 5, 6]

console.log(arr.reverse())
```
2. Explain the properties of the join array method function via program ?
```Javascript
let arr = [1, 2, 3, 4, 5]

console.log(arr.join())

console.log(arr.join(','))
```
3. Show all the values of an array in a html webpage using DOM and forEach method ?
```Javascript
let arr = [1, 2, 3, 4, 5]

arr.forEach(item => document.getElementById("arrValues").innerText += item)
```
4. Merge two sets in javascript ? (hint use Set class in javascript)
```Javascript
const testSet1 = new MySet();
testSet1.add(1);
testSet1.add(2);

const testSet2 = new MySet();
testSet2.add(2);
testSet2.add(5);

let testSet3 = MySet.union(testSet1, testSet2);
testSet3.display();
```