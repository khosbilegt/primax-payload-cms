import { TextBlock } from '../Text/Component'
import { StepsBlock } from '../StepsBlock/Component'
import { ButtonBlock } from '../Button/Component'
import { FormBlock } from '../Form/Component'
import { ListBlock } from '../List/Component'
import { StatisticBlock } from '../Statistic/Component'

interface ContentBlockType {
  orientation: 'horizontal' | 'vertical'
  columns: {
    width: '1/2' | '1/3' | '1/4' | '1/5' | '1/6' | '1/12' | 'full' | 'auto'
    content: any[]
  }[]
}

export const ContentBlock: React.FC<
  {
    id?: string
  } & ContentBlockType
> = (props) => {
  const getResponsiveWidth = (width: string) => {
    if (width === 'full') return 'w-full'
    if (width === 'auto') return 'w-auto'

    // For non-full widths, double the width on small screens
    const responsiveMap: Record<string, string> = {
      '1/2': 'w-full md:w-1/2',
      '1/3': 'w-2/3 md:w-1/3',
      '1/4': 'w-1/2 md:w-1/4',
      '1/5': 'w-2/5 md:w-1/5',
      '1/6': 'w-1/3 md:w-1/6',
      '1/12': 'w-1/6 md:w-1/12',
    }

    return responsiveMap[width] || 'w-full'
  }

  return (
    <div className={`flex ${props.orientation === 'vertical' ? 'flex-col' : ''}`}>
      {props.columns?.map((column: any, index) => (
        <div key={index} className={getResponsiveWidth(column.width)}>
          {column.content.map((content: any, contentIndex: number) => {
            if (content.blockType === 'textBlock') {
              return (
                <TextBlock
                  key={contentIndex}
                  content={content?.content ? (content?.content as string) : ''}
                  id={content.id}
                  alignment={content?.alignment ? content?.alignment : 'left'}
                  size={content?.size ? content?.size : 'small'}
                  highlights={content?.highlights ? content?.highlights : []}
                />
              )
            } else if (content.blockType === 'stepsBlock') {
              return (
                <StepsBlock
                  key={contentIndex}
                  id={content.id}
                  link={content.link}
                  steps={content.steps}
                />
              )
            } else if (content.blockType === 'buttonBlock') {
              return (
                <ButtonBlock
                  key={contentIndex}
                  id={content.id}
                  label={content.label}
                  link={content.link}
                  alignment={content.alignment}
                  isPointerButton={content.isPointerButton}
                />
              )
            } else if (content.blockType === 'formBlock') {
              return (
                <FormBlock
                  key={contentIndex}
                  id={content.id}
                  blockName={content.blockName}
                  blockType={content.blockType}
                  enableIntro={content.enableIntro}
                  form={content.form}
                  introContent={content.introContent}
                />
              )
            } else if (content.blockType === 'listBlock') {
              return <ListBlock key={contentIndex} id={content.id} listItems={content.listItems} />
            } else if (content.blockType === 'statisticBlock') {
              return (
                <StatisticBlock
                  key={contentIndex}
                  id={content.id}
                  highlight={content.highlight}
                  subtitle={content.subtitle}
                />
              )
            }
            return <div key={contentIndex}>Unsupported content type</div>
          })}
        </div>
      ))}
    </div>
  )
}
