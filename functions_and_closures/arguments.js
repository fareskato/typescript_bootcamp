/**
 * Function arguments
 * - To create optional argument put ? before :
 * - The optional arguments should be the last arguments
 * */
/* Optional and default arguments  */
function getFullAddress(fullName, street, zipCode, email, building) {
    if (email === void 0) { email = "test@test.com"; }
    if (building) {
        return "Your full address is : " + fullName + " + " + street + " + " + zipCode + " + " + email + " + " + building;
    }
    else {
        return "Your full address without building is : " + fullName + " + " + street + " + " + zipCode + " + " + email;
    }
}
console.log(getFullAddress('Foo Bar', '123 St', 12345, 'foo@bar.com'));
console.log(getFullAddress('Baz Noo', '456 St', 12345, 'baz@moo.com', 'the building'));
/* Rest (splat) arguments (array) BUt when U call it DON'T pass the args as array  */
function getTeamPlayers(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team : ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var ply = players_1[_a];
        console.log(ply);
    }
}
// getTeamPlayers('Red Socks', ['foo', 'bar', 'test']);  // error
getTeamPlayers('Red Socks', 'foo', 'bar', 'test');
getTeamPlayers('Red Socks', 'foo', 'bar', 'test', 'example');
