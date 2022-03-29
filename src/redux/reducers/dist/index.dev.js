"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _alert = _interopRequireDefault(require("./alert"));

var _auth = _interopRequireDefault(require("./auth"));

var _profile = _interopRequireDefault(require("./profile"));

var _tags = _interopRequireDefault(require("./create_article/tags"));

var _categories = _interopRequireDefault(require("./create_article/categories"));

var _articleId = _interopRequireDefault(require("./create_article/articleId"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  alert: _alert["default"],
  auth: _auth["default"],
  profile: _profile["default"],
  tags: _tags["default"],
  categories: _categories["default"],
  articleId: _articleId["default"]
});

exports["default"] = _default;