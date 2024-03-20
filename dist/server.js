// eslint-disable-next-line no-underscore-dangle
function _interopRequireDefault(obj) {
  // eslint-disable-next-line no-underscore-dangle
  return obj && obj.__esModule ? obj : { default: obj };
}
// eslint-disable-next-line no-underscore-dangle
const _app = require('./app');

// eslint-disable-next-line no-underscore-dangle
const _app2 = _interopRequireDefault(_app);

const port = 3000;
_app2.default.listen(port);
