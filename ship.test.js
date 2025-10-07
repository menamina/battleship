const { Ship, Gameboard } = require('./battleship');

it('tests ship function', () => {
    expect(Ship(4).getLength()).toBe(4);
})