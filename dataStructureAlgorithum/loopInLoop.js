for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Output: loop runs 3X3 times. that is 9 times.
// i = 0, j = 0
// i = 0, j = 1
// i = 0, j = 2
// i = 1, j = 0
// i = 1, j = 1
// i = 1, j = 2
// i = 2, j = 0
// i = 2, j = 1
// i = 2, j = 2

console.log("******************");

for (let i=0; i<3; i++){
    for(let j=0; j<i; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}

// output
// i = 1, j = 0
// i = 2, j = 0
// i = 2, j = 1

console.log("******************");
for (let i=0; i<5; i++){
    for(let j=0; j<=i; j++){
        console.log(`i = ${i}, j = ${j}`);
    }
}

// output
// i   j
// 0   0
// 1   0
// 1   1
// 2   0
// 2   1
// 2   2


console.log("******************");


for (let i=0; i<3; i++){
    for (j=i; j>0; j--){
        console.log(`i = ${i}, j = ${j}`);
    }
}
 // output   
// i   j
// 1   1
// 2   2
// 2   1

console.log("******************");
for (let i=0; i<3; i++){
    for (j=i; j>=0; j--){
        console.log(`i = ${i}, j = ${j}`);
    }
}
// output
// i  j
// 0  0
// 1  1
// 1  0
// 2  2
// 2  1
// 2  0