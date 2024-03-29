export function date (time) {
    const localDate = new Date(time * 1000)
    return localDate.toLocaleDateString()
  }
  
// 千分位
export function toThousands (total) {
  const n = parseInt(total, 10)
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`
}