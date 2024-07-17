const firstNumber = Math.floor(Math.random() * 6) + 1;
console.log('firstNumber', firstNumber, typeof firstNumber)
const secondNumber = Math.floor(Math.random() * 6) + 1;
console.log('secondNumber', secondNumber, typeof secondNumber)

if (firstNumber > secondNumber) {
    console.log('Hai VINTOOO!!!')
}
else if (firstNumber < secondNumber) {
    console.log('Hai PERSOOO!!!')
}
else {
    console.log('Pareggio!!!')
}