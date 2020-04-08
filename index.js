const reporter = require('./reporter');

function first(x) {
  if(x < 0) {
    throw new Error("x cannot be less than zero!");
  }
}

function second(x, y) {
  if(x === y) {
    throw new Error("x cannot equal y!");
  }
}

function third(x, y, z) {
  if(x + y < z) {
    throw new Error("x and y must be greater than z!");
  }
}

function wrap(fn) {
  return (...args) => {
    try {
      fn(...args);
    }
    catch(err) {
      reporter.captureError(err);
    }
  }
}

module.exports = [first, second, third].map(wrap)

















/**/
