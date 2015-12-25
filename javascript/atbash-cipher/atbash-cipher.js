'use strict';

let startStr   = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let endStr     = 'zyxwvutsrqponmlkjihgfedcbazyxwvutsrqponmlkjihgfedcba1234567890'

module.exports = {
  encode: function (str) {
    let strArr = str.split('');
    let ret = [];
    for (var i = 0; i < strArr.length; i++) {
      let charIndex = startStr.indexOf(strArr[i]);
      ret.push(endStr[charIndex]);
    }
    return ret.join('').replace(/(.{5})/g, '$1 ').trim();
  }
};
