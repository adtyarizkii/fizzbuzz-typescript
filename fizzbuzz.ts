function fizzbuzz(num: number) {
  if (num === 0) {
    return 0;
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  if (num % 3 === 0) {
    return "Fizz";
  }
  if (num % 5 === 0) {
    return "Buzz";
  }

  return num;
}

function runFizzbuzz(num: number) {
  for (let i = 1; i <= num; i++) {
    console.log(`number: ${i}: ${fizzbuzz(i)}`);
  }
}

runFizzbuzz(30);

export default fizzbuzz;
