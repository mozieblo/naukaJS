/*napisz program drukujacy przy pomocy console.log wszystkie liczby
od 1 do 100 z dwoma wyjatkami. Zamiast liczb podzielnych przez 3
wydrukuj slowo Fizz, a zamiast liczb podzielnych przez 5 wydrukuj
slowo Buzz. Gdyjuz uda ci sie napisac taki program,zamien go tak aby
drukowal napios FizzBuzz zamiat liczb podzielonych zarowno przez 3,
jak i przez 5.*/
function FizzBuzz1() {
    for (var countingUp = 1; countingUp <= 100; countingUp++) {
        let moduloto3 = countingUp % 3;
        let moduloto5 = countingUp % 5;
        if (moduloto3 === 0 && moduloto5 === 0) {
            console.log("FizzBuzz");
        } else {
            if (moduloto3 === 0) {
                console.log("Fizz");
            } else {
                if (moduloto5 === 0) {
                    console.log("Buzz");
                } else {
                    console.log(countingUp);
                }
            }
        }
    }
}
FizzBuzz1();

function FizzBuzz2() {
    for (var countingUp = 1; countingUp <= 100; countingUp++) {
        let moduloto3 = countingUp % 3;
        let moduloto5 = countingUp % 5;
        if (moduloto3 === 0 && moduloto5 === 0) {
            console.log("FizzBuzz");
        } else {
            console.log(countingUp);
        }
    }
}
//FizzBuzz2();
