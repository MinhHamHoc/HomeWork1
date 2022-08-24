function sortTestHomeWork() {
    var footballClub = ["ManchesterUnited", "Liverpool", "Arsenal", "Tottenham", "Barcelona"];
    // Compare Function:
    var compareFn = function (a, b) {
        // v > 0 --> a > b
        // v = 0 --> a == b
        // v < 0 --> a < b
        var v = a.localeCompare(b);
        return v;
    };
    footballClub.sort(compareFn);
    console.log(footballClub);
}
sortTestHomeWork();
