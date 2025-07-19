import { TextBlock } from '../Text/Component'
import { StepsBlock } from '../StepsBlock/Component'
import { ButtonBlock } from '../Button/Component'
import { FormBlock } from '../Form/Component'
import { ListBlock } from '../List/Component'
import { StatisticBlock } from '../Statistic/Component'
import { GradientCardBlock } from '../GradientCard/Component'
import { SpacerBlock } from '../Spacer/Component'
import { MediaBlock } from '../MediaBlock/Component'
import { VideoEmbedBlock } from '../VideoEmbed/Component'

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

    const responsiveMap: Record<string, string> = {
      '1/12': 'w-full md:w-1/2 lg:w-1/12',
      '1/6': 'w-full md:w-1/2 lg:w-1/6',
      '1/5': 'w-full md:w-1/2 lg:w-1/5',
      '1/4': 'w-full md:w-1/2 lg:w-1/4',
      '1/3': 'w-full md:w-1/2 lg:w-1/3',
      '2/5': 'w-full md:w-1/2 lg:w-2/5',
      '1/2': 'w-full md:w-1/2',
      '3/5': 'w-full md:w-1/2 lg:w-3/5',
      '2/3': 'w-full md:w-1/2 lg:w-2/3',
      '3/4': 'w-full md:w-1/2 lg:w-3/4',
      '4/5': 'w-full md:w-1/2 lg:w-4/5',
      '5/6': 'w-full md:w-1/2 lg:w-5/6',
    }

    return responsiveMap[width] || 'w-full'
  }

  const getGridCols = () => {
    if (props.orientation === 'vertical') return ''

    // For horizontal orientation, we need to determine if the columns should wrap
    // or fit in a single row based on their combined widths
    const totalFractionWidth =
      props.columns?.reduce((sum, column) => {
        const width = column.width
        if (width === 'full') return sum + 1
        if (width === 'auto') return sum + 0.1 // Small contribution for auto

        // Convert fraction strings to decimal values
        const fractionMap: Record<string, number> = {
          '1/12': 1 / 12,
          '1/6': 1 / 6,
          '1/5': 1 / 5,
          '1/4': 1 / 4,
          '1/3': 1 / 3,
          '2/5': 2 / 5,
          '1/2': 1 / 2,
          '3/5': 3 / 5,
          '2/3': 2 / 3,
          '3/4': 3 / 4,
          '4/5': 4 / 5,
          '5/6': 5 / 6,
        }

        return sum + (fractionMap[width] || 1)
      }, 0) || 1

    // If columns add up to approximately 1 (full width), they should be in same row
    if (totalFractionWidth <= 1.1) {
      return 'grid-cols-12' // Use 12-column grid for flexibility
    }

    // Otherwise, use responsive grid based on column count
    const columnCount = props.columns?.length || 1
    if (columnCount === 1) return 'grid-cols-1'
    if (columnCount === 2) return 'grid-cols-1 md:grid-cols-2'
    if (columnCount === 3) return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
    return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  const getGridColSpan = (width: string) => {
    if (props.orientation === 'vertical') return ''

    // Convert fractions to 12-column grid spans with responsive behavior
    // Small: always full (12 spans), Medium: max 1/2 (6 spans), Large: actual fraction
    const spanMap: Record<string, string> = {
      '1/12': 'col-span-12 md:col-span-6 lg:col-span-1',
      '1/6': 'col-span-12 md:col-span-6 lg:col-span-2',
      '1/5': 'col-span-12 md:col-span-6 lg:col-span-2',
      '1/4': 'col-span-12 md:col-span-6 lg:col-span-3',
      '1/3': 'col-span-12 md:col-span-6 lg:col-span-4',
      '2/5': 'col-span-12 md:col-span-6 lg:col-span-5',
      '1/2': 'col-span-12 md:col-span-6',
      '3/5': 'col-span-12 md:col-span-6 lg:col-span-7',
      '2/3': 'col-span-12 md:col-span-6 lg:col-span-8',
      '3/4': 'col-span-12 md:col-span-6 lg:col-span-9',
      '4/5': 'col-span-12 md:col-span-6 lg:col-span-10',
      '5/6': 'col-span-12 md:col-span-6 lg:col-span-10',
      full: 'col-span-12',
      auto: 'col-span-auto',
    }

    return spanMap[width] || 'col-span-12'
  }

  return (
    <div
      className={`${props.orientation === 'vertical' ? 'flex flex-col' : `grid ${getGridCols()} gap-4`} items-stretch`}
    >
      {props.columns?.map((column: any, index) => (
        <div
          key={index}
          className={`h-full flex flex-col items-stretch min-w-0 ${getGridColSpan(column.width)}`}
        >
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
              return <StepsBlock key={contentIndex} id={content.id} steps={content.steps} />
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
            } else if (content.blockType === 'gradientCardBlock') {
              return (
                <GradientCardBlock
                  key={contentIndex}
                  id={content.id}
                  backgroundColorCss={content.backgroundColorCss}
                  content={content.content}
                />
              )
            } else if (content.blockType === 'spacer') {
              return <SpacerBlock id={content.id} key={contentIndex} height={content.height} />
            } else if (content.blockType === 'mediaBlock') {
              return (
                <MediaBlock
                  key={contentIndex}
                  id={content.id}
                  media={content.media}
                  staticImage={content.staticImage}
                  imgClassName={`w-full min-w-0 max-w-full object-contain bg-blue-200`}
                  className="min-w-0 max-w-full"
                  disableInnerContainer={true}
                  enableGutter={false}
                  blockType="mediaBlock"
                />
              )
            } else if (content.blockType === 'videoEmbedBlock') {
              return <VideoEmbedBlock key={contentIndex} videoUrl={content.videoUrl} />
            }

            return <div key={contentIndex}>Unsupported content type</div>
          })}
        </div>
      ))}
    </div>
  )
}
