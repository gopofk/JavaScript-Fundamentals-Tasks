function employees(arr) {
    for (let emplyeeName of arr) {

        
        let employeeObj = { name: emplyeeName, personalNum: emplyeeName.length };

        console.log(`Name: ${employeeObj.name} -- Personal Number: ${employeeObj.personalNum}`);

    }
}
employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])