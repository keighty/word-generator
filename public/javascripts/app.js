var wordList = []

function getWords () {
  var elem = document.getElementById ('word1')
  elem.textContent = wordList[getRandomIntInclusive(0,wordList.length-1)]
  elem = document.getElementById ('word2')
  elem.textContent = wordList[getRandomIntInclusive(0,wordList.length-1)]
}

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const dataURL = "https://cdn.rawgit.com/keighty/2ae5c9e5c325d7f9b8d80425e59520b7/raw/98c0ad24851c64c19280b0f38b47339a999344d9/noun-verbs-v01.json"

const opt = {
  method: 'GET',
  cache: 'default'
}

fetch(dataURL, opt)
  .then(response => response.json())
  .then(data => wordList = data)
