export const getAdaptiveValue = (value: number) => {
  const windowWidth = window.innerWidth

  const resVal = (windowWidth * value) / 1600

  return resVal
}
