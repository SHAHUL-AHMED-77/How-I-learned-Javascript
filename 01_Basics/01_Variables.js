const Id = 234
let Name = "Shahul Ahmed"
var Email = "shahul@gmail.com"
/*
    Prefer not To use Var 
    because of Issues in functional And Block scope
*/

age = 19   // Don't use values Like this


// Id = 123 -- It is Not Allowed to Change the Const Value
console.log(Id);
// Name = "Shahul"  -- It is Allowed to Change the Let Value
console.log(Name)
// Email = "shahulahmed@gmail.com" -- It is Allowed to Change the Var Value
console.log(Email)
// Table --- used for printing all variables in Table Form
console.table([Name,Email,Id,age])  