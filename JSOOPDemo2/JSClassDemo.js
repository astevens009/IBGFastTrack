// Defining class using es6 
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`);
    }
}
// Making object with the help of the constructor 
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

// Original code
//console.log(bike1.name);    // Hayabusa 
//console.log(bike2.maker);   // Kawasaki
//console.log(bike1.getDetails());

// Modified code using document.write()
document.write("<h3>Tutorial Class (using E6):</h3>");
document.write('<br/>' + bike1.name + '<br/>');    // Hayabusa 
document.write(bike2.maker + '<br/>');   // Kawasaki 
document.write(bike1.getDetails()); 

document.write("<h3>Custom Class (using E6):</h3>");
class AcademyStudent {
    constructor(rank, lastName, firstName, classYear) {
        this.rank = rank;
        this.lastName = lastName;
        this.firstName = firstName;
        this.classYear = classYear;
    }

    displayInfo() {
        return (`Starfleet Academy Student: ${this.rank} ${this.lastName}, ${this.firstName}<br/>Current Academic Year: ${this.classYear}<br/><br/>`);
    }
}

let student1 = new AcademyStudent('Ensign', 'Picard', 'Jean-Luc', 'Freshman');
let student2 = new AcademyStudent('Lieutenant', 'Sisko', 'Benjamin', 'Junior');
let student3 = new AcademyStudent('Lieutenant', 'Scott', 'Li-Ang', 'Junior');
let student4 = new AcademyStudent('Lieutenant Commander', 'LaForge', 'Geordi', 'Sophomore');

document.write(student1.displayInfo());
document.write(student2.displayInfo());
document.write(student3.displayInfo());
document.write(student4.displayInfo());
