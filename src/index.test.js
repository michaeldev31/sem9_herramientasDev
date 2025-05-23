const { multiplicar } = require('./index');

test(' adds 5 * 2 to equal 10', () => {
    expect(multiplicar(5, 2)).toBe(10);
});