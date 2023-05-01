const Circle = require('../lib/circle.js');

describe('Circle', () => {
    test('render method should return a valid circle', () => {
      const circle = new Circle('test', 'white', 'blue');
      const expectedSVG = `
      <circle cx="50" cy="50" r="50" fill="blue" />`;
      // const testSvg = circle.render();
      // expect(testSvg).toEqual(expectedSVG);
      expect(circle.render()).toBe(expectedSVG);
    });
});