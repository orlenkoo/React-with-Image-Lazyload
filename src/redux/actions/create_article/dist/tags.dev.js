"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCurrentTags = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _types = require("../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// GET CURRENT TAGS
var getCurrentTags = function getCurrentTags() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get("http://localhost:8000/api/tags/select"));

          case 3:
            res = _context.sent;
            dispatch({
              type: _types.GET_TAGS,
              payload: res.data.data
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types.TAGS_ERROR,
              payload: {
                msg: _context.t0.response.statusText,
                status: _context.t0.response.status
              }
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
};

exports.getCurrentTags = getCurrentTags;