// Function to extract first and last digits from a word and create a two-digit number
function extractDigitsAndCreateNumber(word) {
    // Convert the word to a string to handle numbers
    word = word.toString();
    
    // Get the first and last characters
    const firstDigit = word.charAt(0);
    const lastDigit = word.charAt(word.length - 1);

    // Create a two-digit number by concatenating the first and last digits
    return parseInt(firstDigit + lastDigit);
}

// Get user input
const userInput = prompt("Enter a text:");

// Split the text into words
const words = userInput.split(/\s+/);

// Process each word and create a two-digit number
const result = words.map(word => extractDigitsAndCreateNumber(word));

// Calculate the sum of the two-digit numbers
const sum = result.reduce((acc, number) => acc + number, 0);

// Display the result and the sum on the console
console.log("Result:", result);
console.log("Sum of Two-Digit Numbers:", sum);
