const [first, second, third] = require('./');
const reporter = require('./reporter');
const {assert} = require('chai');

describe('first', () => {
  beforeEach(() => {
    reporter.initialize();
  });

  it('should report an error', () => {
    first(-2);
    assert.equal(reporter.errors.length, 1);
  });
});

describe('second', () => {
  beforeEach(() => {
    reporter.initialize();
  });

  it('should report an error', () => {
    second(4, 4);
    assert.equal(reporter.errors.length, 1);
  });
});

describe('third', () => {
  beforeEach(() => {
    reporter.initialize();
  });

  it('should report an error', () => {
    third(5, 10, 50);
    assert.equal(reporter.errors.length, 1);
  });
});
