var inputText = document.getElementById('input');
let alphabet = {
    "a": "lb",
    "b": "cr",
    "c": "og",
    "ç": "wn",
    "d": "ge",
    "e": "oe",
    "f": "un",
    "g": "oq",
    "ğ": "fj",
    "h": "fd",
    "ı": "sd",
    "i": "uy",
    "j": "gx",
    "k": "th",
    "l": "en",
    "m": "sj",
    "n": "sb",
    "o": "tg",
    "ö": "rb",
    "p": "pa",
    "r": "li",
    "s": "md",
    "ş": "iq",
    "t": "ng",
    "u": "oz",
    "ü": "tt",
    "v": "pe",
    "y": "kb",
    "z": "sr",
    "A": "st",
    "B": "hk",
    "C": "vr",
    "Ç": "xf",
    "D": "nv",
    "E": "fn",
    "F": "in",
    "G": "xy",
    "Ğ": "ux",
    "H": "cl",
    "I": "yv",
    "İ": "yx",
    "J": "zw",
    "K": "zq",
    "L": "eb",
    "M": "gi",
    "N": "la",
    "O": "zl",
    "Ö": "ps",
    "P": "kf",
    "R": "qv",
    "S": "qi",
    "Ş": "xc",
    "T": "rz",
    "U": "ha",
    "Ü": "hz",
    "V": "or",
    "Y": "kr",
    "Z": "rs"
}
document.getElementById("output").innerHTML = "Lütfen bir metin girin."

inputText.addEventListener('input', function () {
    if (!inputText.value) return document.getElementById("output").innerHTML = "Lütfen bir metin girin."
    let result = ''

    let input = inputText.value.split('')
    input.forEach(letter => {
        if (!eval('alphabet.' + letter)) return console.log('Alfabe dosyasında ' + letter + ' harfi bulunamadı. Bunu decodelaman senin için sorun yaratabilir.')
        eval('result += alphabet.' + letter + ' || letter')
    })

    document.getElementById("output").innerHTML = result
    console.log(result)
})