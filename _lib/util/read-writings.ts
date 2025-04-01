export const getUrl = (title: string) =>
  `https://raw.githubusercontent.com/chat-ting/chat-ting.github.io/refs/heads/main/__writings/${title}`

const response = await fetch(
  'https://raw.githubusercontent.com/chat-ting/chat-ting.github.io/refs/heads/main/__writings/writings.map.json'
)

export const writingsWithFileType = (await response.json()) as string[]

export const titles: string[] = []

export const writingsData = writingsWithFileType.map(file => {
  const DOT = file.indexOf('.')
  const TITLE = file.slice(0, DOT)
  titles.push(TITLE)
  return {
    [TITLE]: getUrl(file),
  }
})
