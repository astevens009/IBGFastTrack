//using a constructor 
function constructor_person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

//creating new instances of person object 
let person1 = new constructor_person('Mukul', 'Latiyan');
let person2 = new constructor_person('Rahul', 'Avasthi');

/*
 *  Original output code....
 * console.log(person1.first_name);
 * console.log(`${person2.first_name} ${person2.last_name}`); 
*/

// Modified output code...
document.write('<h3>Tutorial Constructor Object:</h3>');
document.write('<em>Creating new instances of person object</em><br/>');
document.write(person1.first_name);
document.write(`<br/>${person2.first_name} ${person2.last_name}`);


document.write('<br/><h3>Custom Constructor Object:</h3>');

function phone(make, model) {
    this.make = make;
    this.model = model;
}

document.write('<em>Creating new instances of phone object</em><br/>');
android = new phone('Android', 'Cupcake');
iPhone = new phone('iPhone', 'Terminator');

document.write('Phone Make: ' + android.make + '<br/>Phone Model: ' + android.model);
document.write(`<br/><br/>iPhone just got <em>REAL</em>:<br/>Make: ${iPhone.make} <br/>Model: <strong>${iPhone.model}</strong>`);
