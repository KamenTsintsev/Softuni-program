function cats(arr) {

    class Cats {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let el of arr) {
        let name = el.split(" ")[0];
        let age = el.split(" ")[1];
        let cat = new Cats(name, age);
        cat.meow()
    }

}

cats(['Mellow 2', 'Tom 5'])