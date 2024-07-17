const myEmail = prompt('Bentornato, se sei veramente te, inserisci la tua Email ;D');
console.log('myEmail', myEmail, typeof myEmail);

const myEmailList = [
    'giacco@gmail.com',
    'eccomieccomi@gmail.com',
    'sonoproprioio@gmail.com',
    'siuuuu@gmail.com',
    'ronaldo@gmail.com'
];
console.log('myEmailList', myEmailList, typeof myEmailList);
console.log('myEmailList.length', myEmailList.length, typeof myEmailList.length);

let found = false
for(let i = 0; i < myEmailList.length; i++) {
    console.log('myEmailList[i]', myEmailList[i], typeof myEmailList[i]);

    if (myEmailList[i] == myEmail) {
        found = true
    }
}

console.log(found);

if (found) {
    alert('Bentornato')
}
else {
    alert('Chi sei???')
}