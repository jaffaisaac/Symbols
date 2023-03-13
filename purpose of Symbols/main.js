// const charecter ={
//     name:'Jaffa Isaac',
//     location:`New York`,
//     experience:`1 year`,
//     message:`I  love Javascript`,
//     __admin__: false
// }
// //this gets all the object key names and returns idividual key
// for(let result of Object.keys(charecter)){
//     console.log(result);
// }

//the above code u can get access to all properties in the "character" object but i wanted not to to access the "__admin__" property .This is when Symbols came in 
// example is in the below code 
// *************************************************************************
const person ={
    Fname:"Jack",
    Lname:'Benson',
    Id:`A003`,
    [Symbol("password")] :`120AB`, //here using Symbols protect or hides
}
for(let ans of Object.keys(person)){
    console.log(ans)
}