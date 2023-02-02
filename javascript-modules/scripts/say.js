// menambahkan export untuk mengekspos keluar function tersebut dalam penggunaan module
function sayHello(name) {
    console.info(`Hello ${name}`);
}

function sayGoodBye(name) {
    console.info(`Hello ${name}`);
}

const name = "Ardi";

class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name) {
        console.info(`Hello ${name}, my name is ${this.name}`);
    }
}

// alih2 menambahkan export didepan func atau variable, kita bisa melakukan export multiple 
// untuk lebih mempemudah melakukan export
export{ sayHello, sayGoodBye, name, Person};