const fs = require('fs')

const getWords = (qty, file) => {
  const wordFile = file || '/usr/share/dict/words'
  const wordQty = qty || 50

  const readableStream = fs.createReadStream(wordFile)
  let data = ''

  readableStream.on('data', chunk => {
    data += chunk
  })

  readableStream.on('end', () => {
    const dictionary = data.split('\n')
                           .filter(word => !word.match(/[A-Z]/) && word.length > 5 && word.length < 8)
    const wordList = []
    for (let i=0; i < wordQty; i++) {
      wordList.push(dictionary[getRandomIntInclusive(0, dictionary.length - 1)])
    }

    fs.writeFile('bin/chosen-words.txt', wordList, err => {
      if (err) console.log(`Error: ${err.message}`)
      else console.log('success')
    })
  })
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getWords(1000, './bin/20k.txt')

// http://www.enchantedlearning.com/wordlist/...
function scrapeWords() {
  let words = Array.from(document.querySelectorAll('td > font'))
    .map(tag => tag.textContent.trim().replace(/\r|\n/g, ' '))
    .join(' ')
    console.log(words)
}
