const inputString = process.argv[2];
const count = (inputString.match(/[aA]/g) || []).length;

console.log(`A letra 'a' ou 'A' aparece ${count} vezes na string.`);
