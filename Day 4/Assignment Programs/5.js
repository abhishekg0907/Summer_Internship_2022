let a = prompt("Enter 1st value : ")
let b = prompt("Enter 2nd value : ")
let c = prompt("Enter 3rd value : ")

function max(a,b,c){
    if(a>b){
        if(a>c)
            return a    
    }
    else{
        if(b>c)
            return a
    }
    return c
}

console.log("Largest is : ",max(a,b,c))