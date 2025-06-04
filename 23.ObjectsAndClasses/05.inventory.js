function inventory(input) {
    let heroes = [];

    for (let line of input) {

        let [name, levelStr, itemsStr] = line.split(' / ');
        let level = Number(levelStr);
        let items = itemsStr ? itemsStr.split(', ') : [];

        let hero = {
            name: name,
            level: level,
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    }
}
inventory([

    'Batman / 2 / Banana, Gun',

    'Superman / 18 / Sword',

    'Poppy / 28 / Sentinel, Antara'

])