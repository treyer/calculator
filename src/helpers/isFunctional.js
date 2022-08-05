export const isFunctional = type => {
  console.dir(type.componentsType)
  return type === 'functional'
}
