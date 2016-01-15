'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flowjs = require('@maysale01/flowjs');

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _awsSdk = require('aws-sdk');

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _inquirer = require('inquirer');

var _inquirer2 = _interopRequireDefault(_inquirer);

var _utils = require('../../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }

var CREATE_CONFIG = "Create a config file from existing applications";
var CREATE_APPLICATIONS = "Create new applications from a config file";
var END = "<-- Go Back --";

var debug = new _debug2.default('aws-setup:workflows:EB:promptAction');
var ebClient = undefined;

exports.default = new _flowjs.Activity('Prompt Action', function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(context) {
    var action;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return displayMainMenu();

          case 3:
            action = _context.sent;
            _context.t0 = action;
            _context.next = _context.t0 === CREATE_CONFIG ? 7 : _context.t0 === CREATE_APPLICATIONS ? 9 : _context.t0 === END ? 11 : 13;
            break;

          case 7:
            context.setState(context.getStates().CREATE_CONFIG);
            return _context.abrupt('break', 13);

          case 9:
            context.setState(context.getStates().CREATE_APPLICATIONS);
            return _context.abrupt('break', 13);

          case 11:
            context.setState(context.getStates().END);
            return _context.abrupt('break', 13);

          case 13:
            _context.next = 19;
            break;

          case 15:
            _context.prev = 15;
            _context.t1 = _context['catch'](0);

            context.error = _context.t1;
            this.emit('error', context);

          case 19:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 15]]);
  }));

  return function (_x) {
    return ref.apply(this, arguments);
  };
}());

var displayMainMenu = function () {
  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
    var selected;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _utils.Prompt)([{
              name: "name",
              type: "list",
              message: 'Select an action:',
              choices: [CREATE_CONFIG, CREATE_APPLICATIONS, END],
              default: false
            }]);

          case 2:
            selected = _context2.sent;
            return _context2.abrupt('return', selected.name);

          case 4:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function displayMainMenu() {
    return ref.apply(this, arguments);
  };
}();