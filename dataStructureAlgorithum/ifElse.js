// npm start ifElse.js
function checkEligibality(age) {
    if (age >= 18) {
        console.log('Eligible');
    }
    else console.log('Not eligible');
}
checkEligibality(10);
checkEligibality(20);

//check if number is even or odd

function checkEvenOdd(number) {
    if(number%2==0){
        console.log('Even');
    }
    else console.log('Odd');
}
checkEvenOdd(10);
checkEvenOdd(11);
