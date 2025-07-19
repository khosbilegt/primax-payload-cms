import { ButtonBlock } from '../Button/Component'
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
      className="relative flex flex-col rounded-3xl border text-white p-4 h-full justify-center w-full h-full"
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
        } else if (content.blockType === 'buttonBlock') {
          return (
            <ButtonBlock
              key={index}
              id={content.id}
              label={content.label}
              link={content.link}
              alignment={content.alignment}
              isPointerButton={content.isPointerButton}
            />
          )
        }
        return <p>Unsupported content</p>
      })}
    </div>
  )
}
