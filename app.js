// Importing the utilities file
const utilities = require('./utilities');

// Calling functions from the utilities file
utilities.printWelcomeMessage('Jack', 'Jonas');
const celsiusTemperature = 27;
const fahrenheitTemperature = utilities.convertMeasurement(celsiusTemperature, 'CelsiusToFahrenheit');
console.log(`Temperature in Fahrenheit: ${fahrenheitTemperature}`);

const minutes = 240;
const hours = utilities.convertMeasurement(minutes, 'MinutesToHours');
console.log(`Time in hours: ${hours}`);

const factorialResult = utilities.mathOperation(7, 'factorial');
console.log(`Factorial of 7: ${factorialResult}`);

const generatedPassword = utilities.generateRandomPassword(13); // Change the length as needed
console.log(`Generated Password: ${generatedPassword}`);