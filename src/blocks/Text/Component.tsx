interface TextBlockType {
  content: string
  alignment: 'left' | 'center' | 'right'
  size: 'small' | 'medium' | 'large'
  highlights?: { text: string }[]
}

export const TextBlock: React.FC<
  {
    id?: string
  } & TextBlockType
> = (props) => {
  const renderHighlightedText = (text: string) => {
    if (!props.highlights || props.highlights.length === 0) {
      return text
    }

    let highlightedText = text
    const highlights = props.highlights.map((h) => h.text)

    const pattern = highlights
      .map((highlight) => highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
      .join('|')

    if (pattern) {
      const regex = new RegExp(`(${pattern})`, 'gi')
      const parts = highlightedText.split(regex)

      return parts.map((part, index) => {
        const isHighlight = highlights.some(
          (highlight) => part.toLowerCase() === highlight.toLowerCase(),
        )

        if (isHighlight) {
          return (
            <span key={index} className="text-accent">
              {part}
            </span>
          )
        }
        return part
      })
    }

    return text
  }

  return (
    <div
      style={{ textAlign: props.alignment }}
      className={`${props.size === 'small' ? 'text-sm' : props.size === 'medium' ? 'text-xl' : 'text-5xl'} ml-4 p-4`}
    >
      <p>{renderHighlightedText(props.content)}</p>
    </div>
  )
}
