const wrap = (str, max) => {
  let finalArr = []
  let arr = str.split(' ')
  let currLineCount = 0;
  for (let i=0; i<arr.length; i++) {
    let currWord = arr[i]
    let nextWord = arr[i+1]

    if ((currLineCount + currWord.length) > max ) {
      finalArr.push('\n')
      currLineCount = 0
    }

    finalArr.push(currWord)
    currLineCount += currWord.length

    if (i < arr.length - 1) {
      if ((currLineCount + nextWord.length + 1) <= max) {
        finalArr.push(' ')
        currLineCount += 1
      }
    }
  }

  return finalArr.join('')
}

module.exports = wrap
