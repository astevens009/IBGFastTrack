//Defining object 
let person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',

    //method 
    getFunction: function () {
        return (`The name of the person is  
          ${person.first_name} ${person.last_name}`);
    },
    //object within object 
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
};

/*
 * Original output code:
 * console.log(person.getFunction());
 * console.log(person.phone_number.landline);
 */

// Modified output code...
document.write("<h3>Tutorial Object:</h3>");
document.write("<br/><strong>getFunction result:</strong> <br/>" + person.getFunction());
document.write("<br/><br/><strong>Object Defined Inside person Object:</strong> <br/><em>person.phone_number.landline = </em>" + person.phone_number.landline);

//Custom object
let starfleetShip = {
    call_sign: "NCC-1234-A",
    name: "USS Shango",

    getInfoFunction: function () {
        return (`Call Sign: ${this.call_sign} <br\>Ship Name: ${this.name}`);
    },

    // object within an object
    replicator: {
        type: 'food',
        location: 'galley'
    }
};

document.write("<br/><h3>Custom Object:</h3>");
document.write("<br/><strong>getInfoFunction result:</strong> <br/>" + starfleetShip.getInfoFunction());
document.write("<br/><br/><strong>Custom Object Defined inside starfleetShip object:</strong> <br/><em>starfleetShip.replicator.type = </em>" + starfleetShip.replicator.type);

