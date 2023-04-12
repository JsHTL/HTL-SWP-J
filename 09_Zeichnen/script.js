let a = 0;
let b = 0;

for (let index = 1; index < 3; index ++) {
    console.log("XXXX");
    console.log("OOOO");
    console.log("XXXX");
    console.log("OOOO");
    if (index%1==0) {
        console.log("")
    }
}

for (let index = 1; index < 101; index ++) {
    if(index%1==0){
        a = a + index;
    }
    if(index%2==0){
        b = b + index;
    }
}

console.log(a);
console.log(b);