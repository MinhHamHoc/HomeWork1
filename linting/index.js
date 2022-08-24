"use strict";
exports.__esModule = true;
exports.ValiBien = exports.ptBac2 = void 0;
var ptBac2 = function (a, b, c) {
    var valiBien = ValiBien(a, b, c);
    if (!valiBien) {
        if (a === 0) {
            if (b === 0) {
                return console.log("Phương trình vô nghiệm");
            }
            return console.log("x= ".concat(-c / b));
        }
        else if (a !== null && b !== null && c !== null) {
            var delta = (b * b - 4 * a * c);
            // const delta1 = Math.sqrt(delta)
            if (delta < 0) {
                return console.log("Phương trình vô nghiệm");
            }
            else if (delta === 0) {
                return console.log("Ph\u01B0\u01A1ng tr\u00ECnh c\u00F3 nghi\u1EC7m k\u00E9p: x1 = x2 = ".concat(-b / 2 * a));
            }
            else if (delta > 0) {
                return console.log("\n            Ph\u01B0\u01A1ng tr\u00ECnh c\u00F3 2 nghi\u1EC7m ph\u00E2n bi\u1EC7t:\n            x1 = ".concat((-b + Math.sqrt(delta)) / (2 * a), "\n            x2 = ").concat((-b - Math.sqrt(delta)) / (2 * a), "\n            "));
            }
        }
        else {
            return console.log("a, b, c phải khác null");
        }
    }
    return console.log("a b c Phải là số !");
};
exports.ptBac2 = ptBac2;
var ValiBien = function (a, b, c) {
    if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
        return true;
    }
    return false;
};
exports.ValiBien = ValiBien;
// TEST CASE 
//Case1: 
ptBac2(2, 5, 3);
