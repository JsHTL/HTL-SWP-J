let a = [4, 1, 2, 3];
let b = 0;

a.push(17);
a.push(199);

for(let index = 0; index < a.length; index++) {
    console.log (a[index]);
}

for(let index2 = 0; index2 < a.length; index2++) {
    b = b + a[index2];
}

console.log(b);

function average(Array) {
    var i = 0, summ = 0, al = a.length;
    while (i < al) {
        summ = summ + a[i++];
    }
    return summ / al;
    
}

var d = average(Array);
console.log(d);
