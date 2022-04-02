const { test, expect } = require("@jest/globals");
import Calculator from './calculator.js'


const calculator = new Calculator(6, 2);

const firstNumber = calculator.a;
const secondNumber = calculator.b;

describe('addition', ()=> {
    
    test('the first number greater than or equql zero', () => {
       expect(firstNumber).toBeGreaterThanOrEqual(0); 
    }),

    test('the second number greater than or equal zero', () => {
        expect(secondNumber).toBeGreaterThanOrEqual(0); 
    }),
 

     test('addition', () => {
        const result = calculator.add();
        expect(result).toBe(8); 
     })
})

describe('subtract,', ()=> {
    
   test('the first number greater than or equql zero', () => {
      expect(firstNumber).toBeGreaterThanOrEqual(0); 
   }),

   test('the second number less than or equal the first number', () => {
       expect(secondNumber).toBeLessThanOrEqual(6); 
   }),


    test('subtract', () => {
       const result = calculator.substract();
       expect(result).toBe(4); 
    })
})

describe('divide,', ()=> {
    
   test('the first number greater than zero', () => {
      expect(firstNumber).toBeGreaterThan(0); 
   }),

   test('the second number greater than zero', () => {
       expect(secondNumber).toBeGreaterThan(0);; 
   }),


    test('subtract', () => {
       const result = calculator.divide();
       expect(result).toBe(3); 
    })
})

describe('multiply,', ()=> {
    
   test('the first number greater than or equql zero', () => {
      expect(firstNumber).toBeGreaterThan(0); 
   }),

   test('the second number less than or equal the first number', () => {
       expect(secondNumber).toBeGreaterThan(0);; 
   }),


    test('multiply', () => {
       const result = calculator.multiply();
       expect(result).toBe(12); 
    })
})