const kelvin = 0; // 293 Kelvin is today forecast we want to keep it constant

const celsius = kelvin - 273; // 0 celsius is 273 Kelvin we need to substract 273 to convert to celsius

//let fahrenheit = celsius * (9 / 5) + 32;
//fahrenheit = Math.floor(fahrenheit);

// or we can use it as a constant 
const fahrenheit = Math.floor(celsius * (9 / 5) + 32); // converting celsius to fahrenheit and then round the value after calculation and convertation from celsius

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit. And ${celsius} Celsius. `);

// Extra practice. Convert celsius to Newtons and round the value
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} Newton.`)
