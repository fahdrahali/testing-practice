import capitalize from "./capitalize";

describe('capitalize', () => {
test('', () => {
   const stringCapitalized =  capitalize('world');
   expect(stringCapitalized).toMatch('World');
})
})