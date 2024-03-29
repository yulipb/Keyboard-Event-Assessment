let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let secretKey = randomLetter();
console.log(secretKey)

const body = document.querySelector('body')
document.body.addEventListener('keyup', function(event) {
    if(event.key === secretKey) {
    const h2 = document.createElement("h2")
     h2.textContent = ("SECRET KEY PRESSED ") + secretKey
    body.appendChild(h2);
    secretKey = randomLetter()
    console.log(secretKey)
}
    console.log(event.key)
})
function randomLetter() {
       return alphabet[Math.floor(Math.random()* 26)];
    }