// console.log(true);
// console.log(false);

var args = process.argv;
console.log(args[2]);

if (args[2] == '1') {
    console.log('C1');
} else {
    console.log('C2');
}