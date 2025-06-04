function gladiatorInventory(array) {
    let inventorySTR = array.shift();
    let inventory = inventorySTR.split(' ');

    for (let command of array) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'Buy') {
            let item = tokens.shift();

            if (!inventory.includes(item)) {
                inventory.push(item);
            } else {
                continue;
            }

        } else if (action === 'Trash') {
            let item = tokens.shift();

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

        } else if (action === 'Repair') {
            let item = tokens.shift();

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let reparedItem = inventory.splice(index, 1);
                inventory.push(reparedItem[0]);
            }

        } else if (action === 'Upgrade') {
            let itemUpgrade = tokens.shift();
            let [item, upgrade] = itemUpgrade.split('-');

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index + 1, 0, `${item}:${upgrade}`);
            }
        }
    }
    return inventory.join(' ');
}
console.log(gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']));