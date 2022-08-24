function sortTestHomeWork() {
    let footballClub: string[] = ["ManchesterUnited", "Liverpool", "Arsenal", "Tottenham", "Barcelona"];
    // Compare Function:
    var compareFn = (a: string, b: string) => {
        // v > 0 --> a > b
        // v = 0 --> a == b
        // v < 0 --> a < b
        let v: number = a.localeCompare(b);
        return v;
    }
    footballClub.sort(compareFn);
    console.log(footballClub);
}

sortTestHomeWork(); 