var input = document.getElementById('input');

// run once when page loads
if (document.readyState === 'complete') {
    init();
} else {
    document.addEventListener('DOMContentLoaded', () => init());
}

// run after every additional navigation by swup
swup.on('contentReplaced', init);

function init() {
    var inputText = document.getElementById('input');
}

document.getElementById("output").innerHTML = "Please enter a value."

function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}
alphabet = swap(alphabet)

input.addEventListener('input', function () {
    if (!input.value) return document.getElementById("output").innerHTML = "Please enter a value."
    let result = ''
    console.log(input.value);
    const inputArray = input.value.match(/.{1,2}/g);
    inputArray.forEach(chunk => {
        if (!!!alphabet[chunk]) {
            document.getElementById("output").innerHTML = `Couldn't find a value for this chunk: "${chunk}"`
            return;
        }
        result += alphabet[chunk] || chunk
    });
    document.getElementById("output").innerHTML = result
    console.log("result: " + result);
});