// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
const Circle = require('./circle.js');
const Square = require ('./square.js');
const Triangle = require('./triangle.js');


describe('Square', () => {
    test('render method should return a valid SVG', () => {
      const square = new Square('test', 'black', 'red');
      const expectedSVG = `
      <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg">
      <!-- Simple rectangle -->
      <rect width="100" height="100" fill="red" />
      <text x="40" y="35" class="heavy" text-anchor="middle" fill="black">test</text>
    </svg>
  `;
  expect(square.render()).toBe(expectedSVG);
});
});
// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = require('./shapes.js');

// describe("Circle", () => {
//   it("should render a circle", () => {
//       const circle = new Circle();
//       const expectedSvg = `<circle fill="green" cx="150" cy="120" r="80" />`;
//       circle.setColor("green")
//       const testSvg = circle.render();
//       expect(testSvg).toEqual(expectedSvg);
//   });
// });