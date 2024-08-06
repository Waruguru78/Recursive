function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Base case: any number to the power of 0 is 1
    } else if (exponent < 0) {
        return 1 / power(base, -exponent); // Handle negative exponents
    } else {
        return base * power(base, exponent - 1); // Recursive case
    }
}
console.log(power(2, 3));
