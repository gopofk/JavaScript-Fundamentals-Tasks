function cats(arrOfCats) {
    
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let result = [];

    for (let el of arrOfCats) {
        let [name, age] = el.split(' ');
        let currentCat = new Cat(name, age);
        result.push(currentCat);
    }

    result.forEach(cat => cat.meow());

}
cats(['Mellow 2', 'Tom 5']);