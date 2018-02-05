(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var subheader = document.getElementById('example');

var examples = ['Welcome to my world.....', 'I am passionate about equity.', 'I am driven to make an impact.', 'Learn more about my past experiences.', 'Together we can make a difference.', 'Lets connect........'];
var description = 0;

var deleteLine = function deleteLine(element, string) {
  var deleter = function deleter(i) {
    i--;
    if (i < 0) {
      element.value = '';
      description++;
      if (description === 6) description = 0;
      var currentExample = examples[description];
      type(currentExample, subheader);
      return;
    }
    element.innerText = string.substring(0, i);
    var rand = 25;
    setTimeout(function () {
      deleter(i);
    }, rand);
  };
  deleter(string.length + 1);
};

var type = function type(string, element) {
  var writer = function writer(i) {
    if (string.length <= i++) {
      element.value = string;
      setTimeout(function () {
        deleteLine(subheader, string);
      }, 1200);
      return;
    }
    element.innerText = string.substring(0, i);
    var rand = Math.floor(Math.random() * 50 + 1);
    setTimeout(function () {
      writer(i);
    }, rand);
  };
  writer(0);
};
var text = 'Lets connect...';
type(text, subheader);


},{"./star":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


module.exports = Star;

},{}]},{},[1])
