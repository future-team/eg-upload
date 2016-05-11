//export Table from './tables/Table.js';
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Upload2 = require('./Upload');

var _Upload3 = _interopRequireDefault(_Upload2);

exports.Upload = _Upload3['default'];

if (window.Eagleui) {
    Eagleui.Upload = exports['Upload'];
}