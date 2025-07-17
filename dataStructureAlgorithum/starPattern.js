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





