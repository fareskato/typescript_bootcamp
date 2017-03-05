// create function and pass the interface to this function
function profile(user) {
    return "Welcome " + user.firstName + " " + user.lastName;
}
// create javascript object
var realUser = {
    email: 'test@test.com',
    firstName: 'Foo',
    lastName: 'Bar'
};
console.log(profile(realUser));
function otherProfile(employee) {
    return "Hello " + employee.fName + " Ur email is : " + employee.email;
}
var anyEmployee = {
    email: 'test@example.com',
    fName: 'Max',
};
console.log(otherProfile(anyEmployee));
