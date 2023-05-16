function range_vision(number) {
    const digits = Array.from(String(number), Number); // Convertimos el número en un array de dígitos
    let minVisionValue = Infinity;

    for (let i = 0; i < digits.length; i++) {
        const currentDigit = digits[i];
        const leftRange = digits.slice(0, i);
        const rightRange = digits.slice(i + 1);
        const visionValue = currentDigit + sumArray(leftRange) + sumArray(rightRange);

        if (currentDigit === 1 && visionValue < minVisionValue) {
            minVisionValue = visionValue;
        }
    }

    return minVisionValue === Infinity ? false : true;
}

function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Ejemplos de uso:
console.log(range_vision(34315));
console.log(range_vision(9));
