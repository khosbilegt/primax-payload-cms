import { TextBlock } from '../Text/Component'

interface GradientCardType {
  backgroundColorCss?: string
  content?: any[]
}

export const GradientCardBlock: React.FC<
  {
    id?: string
  } & GradientCardType
> = (props) => {
  return (
    <div
      className="relative flex flex-col gap-4 rounded-3xl border text-white p-8 mx-8 h-full justify-center"
      style={{
        background: props.backgroundColorCss
          ? props.backgroundColorCss
          : 'linear-gradient(135deg, #a0522d 0%, #8b4513 50%, #654321 100%)',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10 rounded-3xl" />
      {props.content?.map((content, index) => {
        if (content.blockType === 'textBlock') {
          return (
            <TextBlock
              key={index}
              content={content?.content ? (content?.content as string) : ''}
              id={content.id}
              alignment={content?.alignment ? content?.alignment : 'left'}
              size={content?.size ? content?.size : 'small'}
              highlights={content?.highlights ? content?.highlights : []}
            />
          )
        }
        return <p>Unsupported content</p>
      })}
    </div>
  )
}
