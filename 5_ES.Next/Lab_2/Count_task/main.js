class Person {
    
    #id = 10
    #name = "New Person"
    #age = 20
    static #count = 0

    constructor(_id, _name, _age) {
        Person.#count++;
        this.Id = _id;
        this.Name = _name;
        this.Age = _age;
    }
    
    static get Count (){
        return Person.#count
    }

    get Id (){
        return this.#id
    }

    set Id (_val){
        if(_val > 0 && _val < 100) {
            this.#id = _val;
        }
    }

    get Name (){
        return this.#name
    }

    set Name (_val){
        if(_val.trim().length > 2) {
            this.#name = _val;
        }
    }

    get Age (){
        return this.#age
    }

    set Age (_val){
        if(_val >= 20 && _val <= 45) {
            this.#age = _val;
        }
    }

    print() {
        return `Id = ${this.Id}, Name : ${this.Name}, Age = ${this.Age}`;
    }
}

let p1 = new Person(10, "Ahmed", 30);
console.log(p1.print());
console.log(`Count = ${Person.Count}`);

let p2 = new Person(20, "Nada", 25);
console.log(p2.print());
console.log(`Count = ${Person.Count}`);

let p3 = new Person(30, "Mohamed", 40);
console.log(p3.print());
console.log(`Count = ${Person.Count}`);

let p4 = new Person(25, "Mustafa", 33);
console.log(p4.print());
console.log(`Count = ${Person.Count}`);
