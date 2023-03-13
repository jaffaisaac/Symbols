// console.log(Symbol.for(123) === Symbol(123)) 


// const NotSymbolKey = Symbol(123)
// console.log(Symbol.keyFor(NotSymbolKey))



// console.log(SymbolKey)

let SymbolKey =Symbol.for(123);
console.log(Symbol.keyFor(SymbolKey))