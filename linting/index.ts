const ptBac2 = (a: number, b: number, c: number) => {
    const valiBien = ValiBien(a, b, c);
    if (!valiBien) {
        if (a === 0) {
            if (b === 0) {
                return console.log("Phương trình vô nghiệm")
            }
            return console.log(`x= ${-c / b}`)
        } else if (a !== null && b !== null && c !== null) {
            const delta = (b * b - 4 * a * c);
            // const delta1 = Math.sqrt(delta)
            if (delta < 0) {
                return console.log("Phương trình vô nghiệm")
            } else if (delta === 0) {
                return console.log(`Phương trình có nghiệm kép: x1 = x2 = ${-b / 2 * a}`)
            } else if (delta > 0) {
                return console.log(`
            Phương trình có 2 nghiệm phân biệt:
            x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}
            x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}
            `)
            }
        } else {
            return console.log("a, b, c phải khác null")
        }
    }

    return console.log("a b c Phải là số !")


}

const ValiBien = (a:number, b:number, c:number) => {
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
        return true;
    }
    return false;

}

// TEST CASE 

//Case1: 
ptBac2(2, 5, 3);
//Case2:
// ptBac2(1,2,1);
//Case3:
// ptBac2(1, 1, 2);
//Case4:
// ptBac2("string", 2, 1);
//Case5:
// ptBac2(null, null, 1);

export{ptBac2, ValiBien}