// Print 1 --- to --- n using recursion:

let n = 5;
function print(x){
    if(x > n) return;

    console.log(x);
    print(++x);
}

print(1);

// Output:
// 1
// 2
// 3
// 4
// 5