// for star patterns, i is responsible for rows and j is responsible for columns.

for (let i=0; i<4; i++) {
    let row = "";
    for(j=0; j<4; j++){
        row = row + '*'
    }
    console.log(row);
}

// output : 4x4 star pattern  
// ****
// ****
// ****
// ****

console.log("---------------------------------");

for (let i=0; i<4; i++) {
    let row = "";
    for (let j=0; j<i+1; j++){
        row = row + '*';
    }
    console.log(row);
}

// output : 
// *
// **
// ***
// ****

// when i is 0, j is 1
// when i is 1, j is 2
// when i is 2, j is 3
// when i is 3, j is 4 cause j = j+1. like below:

// i | j
// ======
// 0 | 1
// 1 | 2
// 2 | 3
// 3 | 4



console.log("---------------------------------");

for (let i = 0; i<5; i++){
    let row = "";
    for(let j= 0; j<=i; j++){
        row = row + (j+1);
    }
    console.log(row);
}


// output: 
// 1
// 12
// 123
// 1234
// 12345


console.log("---------------------------------");

for (let i = 0; i<5; i++){
    let row = "";
    for(let j= 0; j<=i; j++){
        row = row + (i+1);
    }
    console.log(row);
}

// output: 
// 1
// 22
// 333
// 4444
// 55555

// or for the same problem you can do this: just cjange j=0 to j=1

for(let i=0; i<=5; i++){
    let row = "";
    for(j=1; j<=i; j++){
        row =row+i;
    }
    console.log(row);
}

// output: 
// 1
// 22
// 333
// 4444
// 55555