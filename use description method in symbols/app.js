// let my_Symbol = new Symbol()  this throw an error "Symbol is not a constructor"
let my_Sym = Symbol()
let sy1 = Symbol(123);


console.log(my_Sym.description) //Expose the [[Description]] internal slot of a symbol directly.

console.log(sy1.description)