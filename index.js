/**
 * Converts text in english to braille code.
 * Write all code related to the DOM Manipulation here.
 * Using the english-to-braille maper convert the text
 * in english language to that in the equivalent braille
 * code.
 */

import englishToBrailleLiteralSet from './english-to-braille.js';

function engToBrl() {
  const array = document.getElementById('sourceLangText').value;
  const myMap = new Map(englishToBrailleLiteralSet);
  const output = array.split('').map(item => myMap.get(item)).join('');
  document.getElementById('targetLangText').innerHTML = output;
}
document.getElementById('btnConvertEnglishToBraille').addEventListener('click', engToBrl);
