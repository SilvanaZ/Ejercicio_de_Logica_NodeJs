function fizz_buzz(N) {
    const result = [];
    for (let i = 1; i <= N; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

// Ejemplo de uso
console.log(fizz_buzz(5));
console.log(fizz_buzz(15));
