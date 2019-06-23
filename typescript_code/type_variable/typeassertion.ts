//Type assertion in TS
let str = 'abc';
let endsWithC = str.endsWith('c');
//let endsWithC = (<String>str).endsWith('c');

console.log(endsWithC);