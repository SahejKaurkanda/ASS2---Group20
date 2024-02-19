// First Function
function printWelcomeMessage(firstName, lastName) {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
  }
  
  // Second Function
  function convertMeasurement(value, conversionType) {
    switch (conversionType) {
      case 'CelsiusToFahrenheit':
        return (value * 9/5) + 32;
      case 'FahrenheitToCelsius':
        return (value - 32) * 5/9;
      case 'MinutesToHours':
        return value / 60;
      case 'HoursToMinutes':
        return value * 60;
      default:
        console.log('Invalid conversion type');
        return null;
    }
  }
  
  // Third Function
  function mathOperation(value, operation) {
    switch (operation) {
      case 'factorial':
        return factorial(value);
      // Add more math operations as needed
      default:
        console.log('Invalid math operation');
        return null;
    }
  }
  
  // Helper function for factorial calculation
  function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // Fourth Function (Advanced)
  function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-=_+[]{}|;:,.<>?';
  
    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allCharacters.length);
      password += allCharacters.charAt(randomIndex);
    }
    return password;
  }
  // Exporting functions to be used in other files
  module.exports = {
    printWelcomeMessage,
    convertMeasurement,
    mathOperation,
    generateRandomPassword,
  };
  