var temp = prompt("Enter Temp ")
var type = prompt("Press 1 if given temp is in °C, otherwise press 2")

function FarToCel(temp){
    return (temp-32)*5/9
}

function CelToFar(temp){
    return temp*9/5+32
}

if(type==1){
    console.log(temp,"°C is ",CelToFar(temp),"°F")
}
else if(type==2){
    console.log(temp,"°F is ",FarToCel(temp),"°C")
}
else{
    console.log("Some error Occured")
}