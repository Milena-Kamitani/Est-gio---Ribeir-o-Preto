function isFibonacci(num) {
  let a = 0, b = 1, c;
  if (num === a || num === b) return true;
  while (b <= num) {
      c = a + b;
      a = b;
      b = c;
      if (b === num) return true;
  }
  return false;
}

const number = parseInt(process.argv[2], 10);
if (isFibonacci(number)) {
  console.log(`${number} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${number} não pertence à sequência de Fibonacci.`);
}
