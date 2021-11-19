//RomanNumerals.toRoman(1000); // should return 'M'

function toRoman(number) {
    let map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 },
        output = '';

    for (let i in map) {
        while (number >= map[i]) {
            output += i;
            number -= map[i];
        }
    }
    return output;
}

console.log(toRoman(1990));

//RomanNumerals.fromRoman('M'); // should return 1000

const CHAR_INT = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function fromRoman(roman) {
    if (roman === null) return -1;
    let num = CHAR_INT[roman.charAt(0)]
    let pre, curr;

    for (let i = 1; i < roman.length; i++) {
        curr = CHAR_INT[roman.charAt(i)];
        pre = CHAR_INT[roman.charAt(i - 1)]
        curr <= pre ? num += curr : num = num - pre * 2 + curr;
    }

    return num;
}

console.log(fromRoman("LVII"))