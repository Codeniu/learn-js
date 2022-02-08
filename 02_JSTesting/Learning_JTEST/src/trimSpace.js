export const trimSpace = arr => {
  if (!Array.isArray(arr)) return 'parameter must be a list'
  return arr.filter(v => v && v.trim())
}
