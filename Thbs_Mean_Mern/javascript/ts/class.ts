class Person { 

    firstName = ""; 

    lastName = "";

    constructor(firstName, lastName) {

        console.log('i am in constructor')

        console.log(firstName, lastName);

        this.firstName = firstName;

        this.lastName = lastName;

    }



    name() {

        return `${this.firstName} ${this.lastName}`;

    }



    whoAreYou () {

        return `Hi i'm ${this.name()}`; //(5)

    }

}

let ram = new Person('Ram', 'Shah');

let wruMsg = ram.whoAreYou();

console.log(wruMsg);

// object or instance of class person

let amit = new Person('amit', 'shah');

let nm = amit.name();

console.log(nm);

// ram shah

// amit shah