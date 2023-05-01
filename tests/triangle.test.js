const Triangle = require('../lib/triangle.js');

describe('Triangle', () => {
    test('render method should return a valid triangle', () => {
      const triangle = new Triangle('test', 'white', 'blue');
      const expectedSVG = `<polygon points="25, 5 62.5, 62.5 0, 62.5" fill="blue" transform="translate(22.5,3)" />`;
      const testSvg = triangle.render();
      expect(testSvg.trim()).toEqual(expectedSVG.trim());
    });
});