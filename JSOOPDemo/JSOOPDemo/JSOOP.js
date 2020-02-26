// Create an object - Method# 1
let starfleetShip1 = {
    call_sign: 'NCC-1701',
    name: 'Enterpise',
    status: 'Destroyed',

    displayInfo: function () {
        return (`Ship Name: ${starfleetShip1.name} 
<br/>Call Sign:  ${ this.call_sign} 
<br/>Current Status: ${this.status}`);
    }
};

document.write(starfleetShip1.displayInfo());
document.write("<br/><br/>=================================================================");
document.write("<br/><em>Encapsulated properties of starfleetShip:</em><br/>");
for (var item in starfleetShip1) {
    document.write(item + "<br/>");
}
document.write("=================================================================<br/>");

// Create an object - Method# 2 (using a constructor)
document.write("<br/><br/><strong>Creating objects using a constructor...</strong><br/>");

function starfleetShip2(call_sign, ship_name, current_status) {
    this.call_sign = call_sign;
    this.ship_name = ship_name;
    this.current_status = current_status;
}

let ship1 = new starfleetShip2('NCC-1701-D', 'Enterprise-D', 'Destroyed');
let ship2 = new starfleetShip2('NCC-1701-E', 'Enterprise-E', 'Repairing');

document.write("<br/><strong>ship1</strong><br/>Call Sign: " + ship1.call_sign +
    "<br/>Ship Name: " + ship1.ship_name +
    "<br/>Current Status: " + ship1.current_status + "<br/>");

document.write("<br/><strong>ship2</strong><br/>Call Sign: " + ship2.call_sign +
    "<br/>Ship Name: " + ship2.ship_name +
    "<br/>Current Status: " + ship2.current_status + "<br/>");

document.write("<br/>=================================================================");
document.write("<br/><em>Encapsulated properties of ship1 and ship2 objects:</em><br/>");
// NOTE: the variable item is declared in the for(...) loop of the starfleetShip1 object
for (item in ship1) {
    document.write(item + "<br/>");
}
document.write("=================================================================<br/>");
