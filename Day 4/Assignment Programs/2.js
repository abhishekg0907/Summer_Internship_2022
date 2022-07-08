let a = prompt("Enter 1st value : ")
let b = prompt("Enter 2nd value : ")
let ch = prompt("Enter 1 to multiply and 2 to divide : ")

if(ch==1){
    console.log("Answer is : ",a*b)
}
else if(ch==2 && b!=0){
    console.log("Answer is : ",a/b)
} 
else{
    console.log("Some error Occured")
}