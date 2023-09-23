console.log("2"==2)

//Here it checks the number as well as data Type 
console.log("2" === 2)

//Symbol Data type
let s1= Symbol('123')
let s2= Symbol('123')

console.log(s1==s2)
console.log(s1)
console.log(s2)

//Array
let names=["Deepak","Shanatanu","Devil"]
console.log(names)


//Object
let obj1 = {
    name: "Deepak",
    age: 20,
}
let obj2=obj1
obj2.name:"Devil"

console.log()


//Function
function sum() 
{
    console.log(1+1)    
}
sum();