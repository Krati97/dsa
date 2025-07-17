For star patterns, i is responsible for rows and j is responsible for columns.


consider this:

for (let i=0; i<4; i++) {
    let row = "";
    for(let j=0 ; j<i+1 ; j++){  <<-----
        row = row + '*'
    }
    console.log(row);
}

for (let i=0; i<4; i++) {
    let row = "";
    for(let j=0 ; j<=i ; j++){  <<-----
        row = row + '*'
    }
    console.log(row);
}

Here I have a diffference in j loop. In first example i have j<i+1 and in second example i have j<=i. both are same thing..!

j <= i
j <  i+1 

are same
--------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------