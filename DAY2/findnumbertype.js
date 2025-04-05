function findNumberType(number) {
  
        if (number > 0) {
            console.log(`The given number ${number} is positive number`);
        } else if (number < 0) {
            console.log(`The given number ${number} is a negative number`);
        }
        else {
            console.log(`The given number ${number} is zero`);
        }
    }

findNumberType(2);