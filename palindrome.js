function isPalindrome(str) {
    // Helper function to clean and prepare the string
    function cleanString(s) {
        return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    }

    // Recursive palindrome checking function
    function checkPalindrome(s, left, right) {
        if (left >= right) {
            return true; // Base case: single character or empty string
        }
        if (s[left] !== s[right]) {
            return false; // Characters don't match
        }
        return checkPalindrome(s, left + 1, right - 1); // Recursive case
    }

    const cleanedStr = cleanString(str);
    return checkPalindrome(cleanedStr, 0, cleanedStr.length - 1);
}
console.log(isPalindrome("A man, a plan, a canal, Panama"));