import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
  test("it should print 1 if receive 1", () => {
    const result = fizzbuzz(1);
    expect(1).toBe(result);
  });
  test("it should print Fizz if receive 3", () => {
    const result = fizzbuzz(3);
    expect("Fizz").toBe(result);
  });
  test("it should print Fizz if receive a multiple of 3", () => {
    const result = fizzbuzz(6);
    expect("Fizz").toBe(result);
  });
  test("should print buzz if receive 5", () => {
    const result = fizzbuzz(5);
    expect("Buzz").toBe(result);
  });
  test("should print buzz if receive a multiple of 5", () => {
    const result = fizzbuzz(10);
    expect("Buzz").toBe(result);
  });
  test("should print fizzbuzz if receive a multiple of 3 and 5", () => {
    const result = fizzbuzz(15);
    expect("FizzBuzz").toBe(result);
  });
});
