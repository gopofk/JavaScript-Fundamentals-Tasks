function commonElements(firstArr, secondArr) {
    
    for (index1 in firstArr) {

        for(index2 in secondArr) {
            if(firstArr[index1] === secondArr[index2]){
                
                console.log(firstArr[index1]);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2']);