/* 
 * Copyright 2012 Thomas Greiner
 * thomas@greinr.com
 *
 * The contents of this file are subject to the Artistic License 2.0.
 * The full text can be found in the LICENSE.txt file and at
 * http://www.opensource.org/licenses/artistic-license-2.0
 */
var History = new (function() {
  var _arr = [];
  var _event = document.createEvent("Event");
  _event.initEvent("historychange");

  this.__defineGetter__("length", function() {return _arr.length;});
  
  this.init = function() {
    Addressbar.input.addEventListener("locationchange", function() {
      _arr.push(Addressbar.input.value);
      Addressbar.input.dispatchEvent(_event);
    }, false);
    _arr.push("hypercube://start");
  }

  this.back = function() {
    if(_arr.length == 1) return;

    _arr.pop();
    Navigator.navigateTo(_arr.pop());
  }
})();
