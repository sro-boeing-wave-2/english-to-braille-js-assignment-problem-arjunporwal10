/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille mapper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

function engtobrl() {
  const str = document.getElementById('sourceLangText').value;
  const splitstr = str.split('');
  const sizeofinputstring = splitstr.length;
  let output = '';
  const myMap = new Map(englishToBrailleLiteralSet);
  let key;
  for (let i = 0; i < sizeofinputstring; i += 1) {
    key = splitstr[i];
    output += myMap.get(key);
  }
  document.getElementById('targetLangText').innerHTML = output;
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', engtobrl);
};
