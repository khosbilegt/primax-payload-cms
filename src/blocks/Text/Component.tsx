interface TextBlockType {
  content: string
  alignment: 'left' | 'center' | 'right'
  size: 'small' | 'medium' | 'large'
}

export const TextBlock: React.FC<
  {
    id?: string
  } & TextBlockType
> = (props) => {
  return (
    <div
      style={{ textAlign: props.alignment }}
      className={`${props.size === 'small' ? 'text-sm' : props.size === 'medium' ? 'text-xl' : 'text-5xl'} ml-4 p-4`}
    >
      <p>{props.content}</p>
    </div>
  )
}
