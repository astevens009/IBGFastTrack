// Object.create() example a 
// simple object with some properties 
const coder = {
    isStudying: false,

    // Modified code
    printIntroduction: function () {
        document.write(`My name is ${this.name}. <br/> Am I  
          studying?: ${this.isStudying}.`);

        // Test...
        //console.log(`My name is ${this.name}. Am I  
        //  studying?: ${this.isStudying}.`);
    }

    /*
     * Original Code
     * 
     * printIntroduction: function () {
     *   console.log(`My name is ${this.name}. Am I  
     *     studying?: ${this.isStudying}.`)
     * }
     * 
    */
};

// Object.create() method 
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder" 
me.name = 'Mukul';

// Inherited properties can be overwritten 
me.isStudying = 'True';

document.write('<h3>Tutorial Object.Create() Sample</h3>');
me.printIntroduction();  

document.write('<h3>Custom Object.Create() Sample</h3>');
const academyStudent = {
    //rank: 'Ensign',
    //lastName: 'Picard',

    displayInfo: function () {
        document.write(`Welcome to Starfleet Academy ${this.rank} ${this.lastName}!`);
    }
};

const student = Object.create(academyStudent);
student.rank = 'Ensign';
student.lastName = 'Picard';

document.write('<em>student</em> is of type: ' + student + '<br/>');
student.displayInfo();


