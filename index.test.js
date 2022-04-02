const { test, expect } = require('@jest/globals');
import { stringLength, reverseString} from './index.js';

const result = stringLength('h');

test('hello a string of 5 char', ()=> {
    expect(result).toBe(1);
})

test('the string no longer than 10 and it is at least one char', ()=>{
    expect(result).toBeLessThanOrEqual(10);
    expect(result).toBeGreaterThanOrEqual(1);
})

const stringResult = reverseString('awesome')

test('the string reversed is match', () => {
    expect(stringResult).toMatch('emosewa');
})