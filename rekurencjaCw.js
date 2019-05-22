function isEven(number) {
    if (number >= 0) {
        if (number === 0) {
            console.log("parzysta");
            return false;
        } else {
            if (number === 1) {
                console.log("nieparzysta");
                return true;
            } else {
                return isEven(number - 2);
            }
        }
    } else {
        if (number === -1) {
            console.log("nieparzysta");
            return true;
        } else {
            return isEven(number + 2);
        }
    }
}
console.log(isEven(-51));
