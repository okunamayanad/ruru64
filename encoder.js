var inputText = document.getElementById('input');
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