function fibonacci(n) {
    if (n <= 1) {
        return n; // Base cases: F(0) = 0, F(1) = 1
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
    }
}
console.log(fibonacci(1));
