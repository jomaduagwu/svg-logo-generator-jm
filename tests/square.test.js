const Square = require ('../lib/square.js');

describe('Square', () => {
    test('render method should return a valid square', () => {
      const square = new Square('test', 'black', 'red');
      const expectedSVG = `
      <rect width="100" height="100" fill="red" />
      `;
    expect(square.render()).toBe(expectedSVG);
  });
});