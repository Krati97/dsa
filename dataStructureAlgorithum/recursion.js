// Recursion:

// Print n --- to --- 1 using recursion:

function print(n){
    if( n < 1 ) return;

    console.log(n);
    n = n - 1;
    print(n);
}

let a = 10;

print (a);

// Output:
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
