/*
functionality
    empty string = empty string
test max char limit
    string w length less than char#
    string w length equal character# => string
    string w length greater char#
    between each \n, make sure num characters is less than char nums
test string is preserved
    split string into array of words, make sure it matches before and after
*/

const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap("", 10)).to.equal("");
    });
    it('Returns a string with length less than the number of character', () => {
        expect(wrap("apple", 8)).to.equal("apple");
    });
    it('Returns a string with length equal to the number of character', () => {
        expect(wrap("apple", 5)).to.equal("apple");
    });
    it('Returns a string with length greater than the number of character', () => {
        expect(wrap("apple pie", 6)).to.equal("apple\npie");
    });
    it('Does not have more than n characters in a line', () => {
        expect(wrap("the quick brown fox",10)).to.equal("the quick\nbrown fox")
    });
    it('The string is preserved', () => {
      let str = "I love apple pie"
      expect(wrap(str,10).split('').to.eql(str.split(' '))
    });

});
