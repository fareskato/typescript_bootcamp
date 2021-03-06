/**
 * Function arguments
 * - To create optional argument put ? before :
 * - The optional arguments should be the last arguments
 * */

/* Optional and default arguments  */
function getFullAddress(fullName : string , street : string, zipCode : number, email: string = "test@test.com", building?: string ) : string {
    if(building){
        return  `Your full address is : ${fullName} + ${street} + ${zipCode} + ${email} + ${building}`;
    } else {
        return  `Your full address without building is : ${fullName} + ${street} + ${zipCode} + ${email}`;
    }
}
console.log(getFullAddress('Foo Bar', '123 St', 12345, 'foo@bar.com'));
console.log(getFullAddress('Baz Noo', '456 St', 12345, 'baz@moo.com', 'the building'));



/* Rest (splat) arguments (array) BUt when U call it DON'T pass the args as array  */
function getTeamPlayers(team : string, ...players : string[]) : void {
    console.log('Team : ' + team);
    for (let ply of players) {
        console.log(ply);
    }
}
// getTeamPlayers('Red Socks', ['foo', 'bar', 'test']);  // error
getTeamPlayers('Red Socks', 'foo', 'bar', 'test');
getTeamPlayers('Red Socks', 'foo', 'bar', 'test','example');