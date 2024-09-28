// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("1.07 dollars should be 156.5 yen", function(){ 
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(1.07)).toBe(156.5);
})

test("2500 yens should be 14 pounds", function() {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(2500)).toBe(14);
})