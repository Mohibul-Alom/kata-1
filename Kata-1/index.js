const INTEGER_ROMAN = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

const ROMAN_INTEGER = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
}

const toRoman = (num) => {
    let roman = "";

    Object.keys(INTEGER_ROMAN).forEach(i => {
        let position = Math.floor(num / INTEGER_ROMAN[i]);
        num -= position * INTEGER_ROMAN[i];
        roman += i.repeat(position);
    })

    return roman;
}

const fromRoman = (string) => {

}

// console.log(toRoman(1000))


function solution(number) {
    var map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        output = '';

    for (var i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i];
        }
    }
    return output;
}

console.log(solution(57));