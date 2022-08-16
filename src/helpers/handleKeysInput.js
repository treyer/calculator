export const receiveConstants = inputArr => {
  const lastElement = inputArr.slice().pop()
  return {
    lastElementKey: Object.keys(lastElement)[0],
    lastElementValue: Object.values(lastElement)[0],
    inputArrCopy: inputArr.slice(),
  }
}

const countBrackets = inputArr => {
  return inputArr.reduce(
    (res, el) => {
      if (Object.keys(el)[0] === 'bracket') {
        if (Object.values(el)[0] === '(')
          res.openBracketsCount += 1
        if (Object.values(el)[0] === ')')
          res.closeBracketsCount += 1
      }
      return res
    },
    {
      openBracketsCount: 0,
      closeBracketsCount: 0,
    },
  )
}

export const isNumberInputComplete = number => {
  if (number === '-' || number === '-.' || number === '.') {
    return false
  }
  if (
    number.includes('.') &&
    number.split('.')[1].length === 0
  ) {
    return false
  }
  return true
}

export const isInputComplete = userInput => {
  const {
    lastElementKey,
    lastElementValue,
  } = receiveConstants(userInput)

  if (userInput.length < 3) return false
  if (lastElementKey === 'number') {
    if (!isNumberInputComplete(lastElementValue)) {
      return false
    }
  }
  if (lastElementKey === 'operator') return false
  if (
    lastElementKey === 'bracket' &&
    lastElementValue === '('
  ) {
    return false
  }
  return true
}

export const trimNumber = number => {
  if (number.includes('.')) {
    number = number.replace(/0*$/, '')
    if (number.split('.')[1].length === 0) {
      number = number.slice(0, -1)
      if (number === '-0') number = '0'
      if (number === '-' || '') number = '0'
    }
  }
  return number
}

// returns null if the digit cannot be added or new inputArr
export const handleAddDigit = (digitInput, inputArr) => {
  const {
    lastElementKey,
    lastElementValue,
    inputArrCopy,
  } = receiveConstants(inputArr)

  if (lastElementKey === 'error') {
    return [{ number: digitInput }]
  }

  if (lastElementKey !== 'number') {
    inputArrCopy.push({ number: digitInput })
    return inputArrCopy
  } else {
    if (lastElementValue === '0' && digitInput === '0') {
      return null
    }
    if (lastElementValue === '-0' && digitInput === '0') {
      return null
    }
    if (lastElementValue === '0' && digitInput !== '0') {
      inputArrCopy[inputArrCopy.length - 1] = {
        number: digitInput,
      }
      return inputArrCopy
    }
    inputArrCopy[inputArrCopy.length - 1] = {
      number: lastElementValue + digitInput,
    }
    return inputArrCopy
  }
}

// return null if the Dot cannot be added or new inputArr
export const handleAddDot = inputArr => {
  const {
    lastElementKey,
    lastElementValue,
    inputArrCopy,
  } = receiveConstants(inputArr)

  if (lastElementKey === 'error') {
    return [{ number: '.' }]
  }

  if (lastElementKey !== 'number') {
    inputArrCopy.push({ number: '.' })
    return inputArrCopy
  } else {
    if (!lastElementValue.includes('.')) {
      inputArrCopy[inputArrCopy.length - 1] = {
        number: lastElementValue + '.',
      }
      return inputArrCopy
    }
    return null
  }
}

// returns null if the Bracket cannot be added
export const handleAddOperator = (
  newOperator,
  inputArr,
) => {
  const {
    lastElementKey,
    lastElementValue,
    inputArrCopy,
  } = receiveConstants(inputArr)

  if (lastElementKey === 'error') {
    if (newOperator === '-') return [{ number: '-' }]
    return null
  }

  if (inputArr.length === 1) {
    if (lastElementKey === 'number') {
      if (!isNumberInputComplete(lastElementValue)) {
        return null
      }
      if (lastElementValue === '0') {
        if (newOperator === '-') {
          return [{ number: '-' }]
        }
        return [{ number: '0' }, { operator: newOperator }]
      }

      inputArrCopy[0] = {
        number: trimNumber(lastElementValue),
      }
      inputArrCopy.push({ operator: newOperator })
      return inputArrCopy
    }
    if (lastElementKey === 'bracket') return null
  } else {
    if (lastElementKey === 'bracket') {
      if (lastElementValue === ')') {
        inputArrCopy.push({ operator: newOperator })
        return inputArrCopy
      }
      if (lastElementValue === '(') {
        if (newOperator === '-') {
          inputArrCopy.push({ number: '-' })
          return inputArrCopy
        }
        return null
      }
    }
    if (lastElementKey === 'operator') {
      if (newOperator === '-') {
        inputArrCopy.push({ number: '-' })
        return inputArrCopy
      }
      if (lastElementValue === newOperator) {
        return null
      }
      inputArrCopy.pop()
      inputArrCopy.push({ operator: newOperator })
      return inputArrCopy
    }
    if (lastElementKey === 'number') {
      if (!isNumberInputComplete(lastElementValue)) {
        return null
      }
      inputArrCopy.pop()
      inputArrCopy.push({
        number: trimNumber(lastElementValue),
      })
      inputArrCopy.push({ operator: newOperator })
      return inputArrCopy
    }
  }
}

// returns null if the Bracket cannot be added or new inputArr
export const handleAddBracket = (
  inputBracket,
  inputArr,
) => {
  const {
    lastElementKey,
    lastElementValue,
    inputArrCopy,
  } = receiveConstants(inputArr)

  if (lastElementKey === 'error') {
    if (inputBracket === '(') return [{ bracket: '(' }]
    return null
  }

  if (inputArr.length === 1) {
    if (lastElementKey === 'number') {
      if (!isNumberInputComplete(lastElementValue)) {
        return null
      }
      if (
        lastElementValue === '0' &&
        inputBracket === '('
      ) {
        return [{ bracket: '(' }]
      }
      return null
    }
    if (lastElementKey === 'bracket') {
      if (inputBracket === '(') {
        inputArrCopy.push({ bracket: '(' })
        return inputArrCopy
      }
      return null
    }
  } else {
    if (lastElementKey === 'number') {
      if (!isNumberInputComplete(lastElementValue)) {
        return null
      }
      if (inputBracket === ')') {
        const {
          openBracketsCount,
          closeBracketsCount,
        } = countBrackets(inputArr)
        if (openBracketsCount > closeBracketsCount) {
          inputArrCopy.pop()
          inputArrCopy.push({
            number: trimNumber(lastElementValue),
          })
          inputArrCopy.push({ bracket: ')' })
          return inputArrCopy
        }
        return null
      }
      return null
    }
    if (lastElementKey === 'operator') {
      if (inputBracket === '(') {
        inputArrCopy.push({ bracket: '(' })
        return inputArrCopy
      }
      return null
    }
    if (lastElementKey === 'bracket') {
      if (lastElementValue === '(') {
        if (inputBracket === '(') {
          inputArrCopy.push({ bracket: '(' })
          return inputArrCopy
        }
        return null
      }
      if (lastElementValue === ')') {
        if (inputBracket === ')') {
          const {
            openBracketsCount,
            closeBracketsCount,
          } = countBrackets(inputArr)
          if (openBracketsCount > closeBracketsCount) {
            inputArrCopy.push({ bracket: ')' })
            return inputArrCopy
          }
          return null
        }
        return null
      }
    }
  }
}

// return null if current inputArr is set to initial value
// else return initial value array
export const handleClearAll = inputArr => {
  const {
    lastElementKey,
    lastElementValue,
  } = receiveConstants(inputArr)

  if (
    inputArr.length === 1 &&
    lastElementKey === 'number' &&
    lastElementValue === '0'
  ) {
    return null
  }
  return [{ number: '0' }]
}

// return null if current inputArr is set to initial value
// else return new inputArr
export const handleClearEntry = inputArr => {
  const {
    lastElementKey,
    lastElementValue,
    inputArrCopy,
  } = receiveConstants(inputArr)

  if (inputArr.length === 1) {
    if (
      lastElementKey === 'number' &&
      lastElementValue === '0'
    ) {
      return null
    }
    return [{ number: '0' }]
  } else {
    inputArrCopy.pop()
    return inputArrCopy
  }
}
