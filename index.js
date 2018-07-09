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
  const sizeoftable = englishToBrailleLiteralSet.length;
  const sizeofinputstring = splitstr.length;
  let output = '';
  for (let i = 0; i < sizeofinputstring; i += 1) {
    for (let j = 0; j < sizeoftable; j += 1) {
      if (splitstr[i] === englishToBrailleLiteralSet[j][0]) {
        output += englishToBrailleLiteralSet[j][1];
      }
    }
  }
  document.getElementById('targetLangText').innerHTML = output;
}
window.onload = function () {
  document.getElementById('btnConvertEnglishToBraille').addEventListener('click', engtobrl);
};
