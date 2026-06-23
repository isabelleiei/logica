let a = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
    [13,14,15]
]

let b = [
    [15,14,14],
    [12,11,10],
    [9,8,7],
    [6,5,4],
    [3,2,1]
]
let c = [];

for (let i = 0; i < 5; i++) {
    c[i] = []
    for (let j = 0; j < 3; j++) {
        c[i][j] = a[i][j]+b[i][j];
    }
}
console.log(a);
console.log(b);
console.log(c);