const firstNumber = parseInt(prompt('Player 1, seleziona il tuo numero da 1 a 6 #GoodLuck;D'));
const secondNumber = parseInt(prompt('Player 2, seleziona il tuo numero da 1 a 6 #GoodLuck;D'));

if (firstNumber > secondNumber) {
    console.log('Complimenti Player 1 HAI VINTO!!!')
}
else if (firstNumber < secondNumber) {
    console.log('Complimenti Player 2 HAI VINTO!!!')
}
else if (firstNumber == secondNumber) {
    console.log('Cavolo che sfida, però è pareggio, ritentate XD')
}
else {
    console.log('Ma cosa avete scritto :(, rifatelo bene!!!')
}