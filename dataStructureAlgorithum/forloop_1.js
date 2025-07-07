// Case 1
// let i=0 is initialization, i<5 is condition, i++ is increment
for(let i=0;i<5;i++){ 
    console.log('Hello' + i); // print hello 5 times
}

// Case 2
for(let i=0;i<=5;i++){
    console.log('Hello' + i); // print hello 6 times
}

// Case 3
for(let i=3; i<5; i++){
    console.log('Hello' + i); // print hello 2 times: Hello3 Hello4
}

// Case 4
for(let i = 2; i<9; i=i+2){
    console.log('HELLO'); // print hello 4 times, WHERE i = 2,4,6,8
}

// Case 5
for(let i=5; i>0; i--){
    console.log('HELLO' + i); // print hello 5 times
}

// Case 6
// Calling a function inside a loop:
function greeet(){
    console.log('Hello')
}
for(let i = 0; i<10; i++) {
    greeet(); // prints Hello 10 times
}

//case 7
let arr = [1,2,3,4,5]
let length = arr.length;
// console.log(length);// print 5
for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

//case 8
// To print even numbers:
for(let i=0; i<length; i++){
    if(arr[i]%2 == 0){
        console.log(arr[i]) // print even numbers
    }
}

//case 9
// while loop:
let i=0;
while(i<5){
    console.log("hello"); // print hello 5 times
    i++;
}