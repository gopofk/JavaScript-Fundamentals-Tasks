function city(obj) {
    
    for(let el in obj){
        console.log(`${el} -> ${obj[el]}`);
    }

}
city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" });
