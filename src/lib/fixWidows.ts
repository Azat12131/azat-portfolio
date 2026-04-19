const SHORT_WORDS = [
  'и',
  'а',
  'в',
  'во',
  'на',
  'но',
  'с',
  'со',
  'к',
  'ко',
  'о',
  'об',
  'от',
  'до',
  'по',
  'за',
  'из',
  'не',
  'да',
  'для',
]

export function fixWidows(text: string): string {
  const words = text.split(' ')

  const result: string[] = []

  for (let i = 0; i < words.length; i++) {
    const current = words[i]
    const lower = current.toLowerCase()

    if (SHORT_WORDS.includes(lower) && i < words.length - 1) {
      result.push(`${current}\u00A0${words[i + 1]}`)
      i++
    } else {
      result.push(current)
    }
  }

  return result.join(' ')
}