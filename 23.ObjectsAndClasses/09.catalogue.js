function catalogue(productsArray) {
    let catalogue = {};

    for (let line of productsArray) {
        let [product, price] = line.split(' : ');
        let initial = product[0];

        if (!catalogue[initial]) {
            catalogue[initial] = [];
        }

        catalogue[initial].push({ name: product, price: Number(price) });
    }

    let sortedInitials = Object.keys(catalogue).sort();

    for (let initial of sortedInitials) {
        console.log(initial);
        let sortedProducts = catalogue[initial].sort((a, b) => a.name.localeCompare(b.name));
        for (let product of sortedProducts) {
            console.log(`  ${product.name}: ${product.price}`);
        }
    }
}
catalogue([

    'Appricot : 20.4',

    'Fridge : 1500',

    'TV : 1499',

    'Deodorant : 10',

    'Boiler : 300',

    'Apple : 1.25',

    'Anti-Bug Spray : 15',

    'T-Shirt : 10'

])