const repeatString = function(string, num) {
    let startingString = string;


    if (num < 0){
        return 'ERROR';
    }
    else if (num == 0){
        return '';
    }

    while (num > 1){
        string += startingString;
        num--;
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
