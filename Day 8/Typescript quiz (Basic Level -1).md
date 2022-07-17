# Typescript quiz (Basic Level -1) 
### _**Theory**_
1. What are the basic data types in TypeScript ?
    * The basic data types in TypeScript are as follows :-
        * Boolean
        * String
        * Number
        * NULL
        * Undefined
2. What is Generic data type ?
    * Generic data types allow us to write a general, generic class (or method) that works with different types.
3. What is type inferring in TS ?
    * Type inference refers to the automatic detection of the type of an expression in a TypeScript.
4. What are the possible ways to define typing for functions ?
    * These are the following methods that we use for the same :-
        * Method Signatures
        ```js
        interface Date {
        toString(): string;
        setTime(time: number): number;
        }
        ```
        * Function Type Literals
        ```js
        interface Array<T> {
        sort(compareFn?: (a: T, b: T) => number): this;
        }
        ```
        * Object Type Literals with Call or Construct Signatures
        ```js
        interface RegExpConstructor {
        (pattern: RegExp): RegExp;
        (pattern: string, flags?: string): RegExp;
        }
        ```
5. How to define Generic type for Classes ?
    * A generic class has a similar shape to a generic interface. Generic classes have a generic type parameter list in angle brackets (<>) following the name of the class.
    ```js
    class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
    }
    
    let myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
    return x + y;
    };
    ```
### _**Programs**_

```js
class Entry {
     name: string;
     description: string;
     done: boolean;
   }

   var todos: Entry[] = [];

   function add(name: string, description: string): number {
     return todos.push({
       name: name,
       description: description,
       done: false,
     });
   }

   function remove(index: number): Entry[] {
     return todos.splice(index, 1);
   }

   function list(): void {
     todos.forEach(function (todo: Entry, index: number) {
       console.log(index + " - " + todo.name);
     });
   }

   function update(index: number, name: string, description: string): Entry {
     todos[index].name = name;
     todos[index].description = description;
     return todos[index];
   }

   console.log(add("Wisflux", "InternShip"));      
   list();        
```