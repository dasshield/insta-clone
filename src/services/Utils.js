export function chunkArray(array, size) {
  return array.reduce((chunks, el, i) => {
    if (i % size === 0) {
      chunks.push([el])
    } else {
      chunks[chunks.length - 1].push(el)
    }
    return chunks
  }, [])
}