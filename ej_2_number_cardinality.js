function number_cardinality(number) {
    const lastDigit = number % 10;

    if (lastDigit === 0) {
        return "zero";
    } else if (lastDigit === 5) {
        return "five";
    } else if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Ejemplos de uso:
console.log(number_cardinality(100));
console.log(number_cardinality(78));
console.log(number_cardinality(625));
console.log(number_cardinality(99));
