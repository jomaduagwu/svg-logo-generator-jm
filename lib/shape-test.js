// Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.

describe('shape', () => {
    // TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
    describe('Password lenth', () => {
    it('returns false when the password is less than 8 characters', () => {
      const password = 'abc123';
      const result = Validate.isPassword(password);
      expect(result).toBe(false);
    });
  })
  
// The following example test should pass:

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = require('./shapes.js');
})