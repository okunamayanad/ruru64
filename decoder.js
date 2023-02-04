var input = document.getElementById('input');
document.getElementById("output").innerHTML = "Lütfen bir metin girin."
let alphabet =
    { "lb": "a", "cr": "b", "og": "c", "wn": "ç", "ge": "d", "oe": "e", "un": "f", "oq": "g", "fj": "ğ", "fd": "h", "sd": "ı", "uy": "i", "gx": "j", "th": "k", "en": "l", "sj": "m", "sb": "n", "tg": "o", "rb": "ö", "pa": "p", "li": "r", "md": "s", "iq": "ş", "ng": "t", "oz": "u", "tt": "ü", "pe": "v", "kb": "y", "sr": "z", "st": "A", "hk": "B", "vr": "C", "xf": "Ç", "nv": "D", "fn": "E", "in": "F", "xy": "G", "ux": "Ğ", "cl": "H", "yv": "I", "yx": "İ", "zw": "J", "zq": "K", "eb": "L", "gi": "M", "la": "N", "zl": "O", "ps": "Ö", "kf": "P", "qv": "R", "qi": "S", "xc": "Ş", "rz": "T", "ha": "U", "hz": "Ü", "or": "V", "kr": "Y", "rs": "Z" }


input.addEventListener('input', function () {
    if (!input.value) return document.getElementById("output").innerHTML = "Lütfen bir metin girin."
    let result = ''
    console.log(input.value);
    const inputArray = input.value.match(/.{1,2}/g);
    inputArray.forEach(chunk => {
        if (!eval(`alphabet.${chunk}`)) {
            document.getElementById("output").innerHTML = `"${chunk}" için bir değer bulunamadı.`
            return;
        }
        eval(`result += alphabet.${chunk} || '${chunk}'`)
    });
    document.getElementById("output").innerHTML = result
    console.log("result: " + result);
});