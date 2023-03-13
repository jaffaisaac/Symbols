let obj ={}; // here i have created an empty object 

//here below an add properties to the obj object 

obj["name"]=`jaffa`;
obj["age"]= 27;
obj[Symbol()] =`location`;
obj["id"]=Symbol()

for(p in obj){
    console.log(p ,obj[p])
}

console.log(JSON.stringify(obj)) ///An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.