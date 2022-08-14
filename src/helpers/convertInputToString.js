export const convertInputToString = arr => {
  return arr.reduce(
    (res, el) => (res += Object.values(el)[0] + ' '),
    ' ',
  )
}
