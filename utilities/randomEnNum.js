function randomEnNum (length_required) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = lowerCaseLetters + upperCaseLetters + numbers

  let randomText = ''
  for (let i = 0; i < length_required; i++) {
    const index = Math.floor(Math.random() * collection.length)
    randomText += collection[index]
  }
  return randomText
}

module.exports = randomEnNum

// shortid安全性不夠，nanoid不知怎用，base62普普
