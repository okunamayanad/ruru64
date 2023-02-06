var encodeInput = document.getElementById('inputEncode');
var decodeInput = document.getElementById('inputDecode');

// run once when page loads
if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => init());
}

// run after every additional navigation by swup
swup.on('contentReplaced', init);

function init() {
    console.log('init called');
    var encodeInput = document.getElementById('inputEncode');
    var decodeInput = document.getElementById('inputDecode');
    resetAlphabet()
    if (decodeInput) {
        document.getElementById("output").innerHTML = "Please enter a value."

        decodeInput.addEventListener('input', function () {
            if (!decodeInput.value) return document.getElementById("output").innerHTML = "Please enter a value."
            let result = ''
            console.log(decodeInput.value);
            const inputArray = decodeInput.value.match(/.{1,2}/g);
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
    } else if (encodeInput) {
        document.getElementById("output").innerHTML = "Please enter a value."

        encodeInput.addEventListener('input', function () {
            if (!encodeInput.value) return document.getElementById("output").innerHTML = "Please enter a value."
            let result = ''

            let input = encodeInput.value.split('')
            input.forEach(letter => {
                if (!!!alphabet[letter]) return console.log('Alfabe dosyasında ' + letter + ' harfi bulunamadı. Bunu decodelaman senin için sorun yaratabilir.')
                result += alphabet[letter] || letter
            })

            document.getElementById("output").innerHTML = result
            console.log(result)
        })
    }
}
