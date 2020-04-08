const errors = [];

function captureError(err) {
  errors.push(err);
}

function initialize() {
  errors.length = 0;
}

module.exports = {
  errors,
  initialize,
  captureError,
}
