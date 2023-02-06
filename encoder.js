
var inputText = document.getElementById('input');

function init() {
    var inputText = document.getElementById('input');
}

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