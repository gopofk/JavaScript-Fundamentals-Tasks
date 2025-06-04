function arrayManipulator(nums, commands) {
    for (let command of commands) {
        let tokens = command.split(' ');
        let action = tokens.shift();

        if (action === 'add') {
            let index = Number(tokens.shift());
            let element = Number(tokens.shift());
            nums.splice(index, 0, element);

        } else if (action === 'addMany') {
            let index = Number(tokens.shift());
            let elements = tokens.map(Number);
            nums.splice(index, 0, ...elements); 

        } else if (action === 'contains') {
            let element = Number(tokens.shift());
            let index = nums.indexOf(element);
            console.log(index);

        } else if (action === 'remove') {
            let index = Number(tokens.shift());
            nums.splice(index, 1);

        } else if (action === 'shift') {
            let positions = Number(tokens.shift());
            positions = positions % nums.length; 
            let shifted = nums.splice(0, positions);
            nums.push(...shifted);

        } else if (action === 'sumPairs') {
            let result = [];
            for (let i = 0; i < nums.length; i += 2) {
                let first = nums[i];
                let second = nums[i + 1] !== undefined ? nums[i + 1] : 0;
                result.push(first + second);
            }
            nums.length = 0;
            nums.push(...result);

        } else if (action === 'print') {
            console.log(`[ ${nums.join(', ')} ]`);
            break; 
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],

['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3',

'shift 1', 'print'])