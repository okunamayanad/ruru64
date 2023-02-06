const swup = new Swup();

if (document.readyState === 'complete') {
    console.log("readyState");
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => init());
}

swup.on('contentReplaced', init);

function init() {
    console.log("init");
    var input = document.getElementById('inputDecode');
    document.getElementById("output").innerHTML = "Please enter a value."

    var swappedAlphabet = {};
    for (var key in alphabet) {
        swappedAlphabet[alphabet[key]] = key;
    }

    var inputText = document.getElementById('inputEncode');

    if (inputText) {
        document.getElementById("output").innerHTML = "Please enter a value."

        inputText.addEventListener('input', function () {
            if (!inputText.value) return document.getElementById("output").innerHTML = "Please enter a value."
            let result = ''

            let input = inputText.value.split('')
            input.forEach(letter => {
                if (!!!alphabet[letter]) return console.log('Alfabe dosyasında ' + letter + ' harfi bulunamadı. Bunu decodelaman senin için sorun yaratabilir.')
                result += alphabet[letter] || letter
            })

            document.getElementById("output").innerHTML = result
            console.log(result)
        })
    } else {
        input.addEventListener('input', function () {
            if (!input.value) return document.getElementById("output").innerHTML = "Please enter a value."
            let result = ''
            console.log(input.value);
            const inputArray = input.value.match(/.{1,2}/g);
            inputArray.forEach(chunk => {
                if (!!!swappedAlphabet[chunk]) {
                    document.getElementById("output").innerHTML = `Couldn't find a value for this chunk: "${chunk}"`
                    return;
                }
                result += swappedAlphabet[chunk] || chunk
            });
            document.getElementById("output").innerHTML = result
            console.log("result: " + result);
        });
    }
}