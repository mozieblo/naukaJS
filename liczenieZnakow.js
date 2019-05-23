//zwrócic liczbę wielkich liter B w tym łancuchu
function countBs(podajStringa) {
    function porownanieLiter(podajStringa) {
        var counter = 0;
        for (var i = 0; i <= podajStringa.length; i++)
            if (podajStringa[i] == "B") {
                counter = counter + 1;
            }
        return console.log(counter);
    }

    porownanieLiter(podajStringa);
}
countBs("BBCCBBC");
