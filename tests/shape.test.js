// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
const Circle = require('../lib/circle.js');


// describe("Circle", () => {
//     it("should render a circle", () => {
//         const circle = new Circle();
//         const expectedSvg = `<circle fill="green" cx="150" cy="120" r="80" />`;
//         circle.setColor("green")
//         const testSvg = circle.render();
//         expect(testSvg).toEqual(expectedSvg);
//     });
// });

describe('Circle', () => {
    test('render method should return a valid circle', () => {
      const circle = new Circle('test', 'white', 'blue');
      const expectedSVG = `
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="blue" />`;
      // const testSvg = circle.render();
      // expect(testSvg).toEqual(expectedSVG);
      expect(circle.render()).toBe(expectedSVG);
    });
});




// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = require('../lib/shape.js');

// describe("Circle", () => {
//   it("should render a circle", () => {
//       const circle = new Circle();
//       const expectedSvg = `<circle fill="green" cx="150" cy="120" r="80" />`;
//       circle.setColor("green")
//       const testSvg = circle.render();
//       expect(testSvg).toEqual(expectedSvg);
//   });
// });