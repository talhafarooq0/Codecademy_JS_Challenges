/*
Temperatue in Kelvin
*/

const kelvin = 293; 

/*
Temperature in Celsius(subtract conversion from kelvin  )
*/

const celsius = kelvin - 273

/*
Temperature in Farenheit(convert to celsius)
//used Math.floor() method to round number to whole number
*/

let fahrenheit = celsius * (9/5) + 32
/*
Temperature in Newton Scale (convert from Celsius)
Use Math.floor() method to round number to whole number
*/

fahrenheit = Math.floor(fahrenheit);

/*
Temperature in Newton Scale (convert from Celsius)
Use Math.floor() method to round number to whole number
*/

let newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${celsius} degrees Celsius.`);
console.log(`The temperature is ${kelvin} degrees Kelvin.`);
console.log(`The temperature is ${newton} degrees Newton.`);
