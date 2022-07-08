let marks = prompt("Enter total marks : ")
let exam = prompt("Enter exam type : ")

function result(num, exam){
    if(num>=90 && num<=100)
        return true
    else if(num == 89 && exam != "final-exam" )
        return true
    else
    return false
}
if(marks<0 || marks>100)
console.log("Values are Incorrect")
else
console.log(result(marks,exam))