const removeFromArray = function(...args) {

    let array = args[0];
    let arrayWithoutArgs = [];

    array.forEach(element => {
        if (!args.includes(element)){
            arrayWithoutArgs.push(element);
        }
    });
    
    
    return arrayWithoutArgs;
};

/*
    for (let i = 0; i < array.length; i++){
        for (let j = 0; j < argsArray.length; j++){
            if (array[i] === argsArray[j]){
                indexOfDeletedItem = array.indexOf(argsArray[j]);
                array.splice(indexOfDeletedItem,1);
            }
        }
    }


    

*/

// Do not edit below this line
module.exports = removeFromArray;
