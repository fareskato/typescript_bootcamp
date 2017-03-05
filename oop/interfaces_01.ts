//  Interface declaration
interface User{
  email : string,
  firstName : string,
  lastName : string
}

// create function and pass the interface to this function
function profile(user : User) : string {
  return `Welcome ${user.firstName} ${user.lastName}`;
}

// create javascript object
let realUser = {
  email : 'test@test.com',
  firstName : 'Foo',
  lastName : 'Bar'
}


console.log(profile(realUser));


/**
* Interface optional arguments
* for example : lName
*/
interface Employee{
  email : string,
  fName? : string,
  lName? : string
}


function otherProfile(employee : Employee) : string {
  return `Hello ${employee.fName} Ur email is : ${employee.email}`;
}

var anyEmployee = {
  email : 'test@example.com',
  fName : 'Max',
}

console.log(otherProfile(anyEmployee));
