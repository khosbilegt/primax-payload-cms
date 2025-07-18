import { FeatureCardBlock } from '../FeatureCard/Component'
import { ListCardBlock } from '../ListCard/Component'

interface CardBoxType {
  smallColumnCount: number
  mediumColumnCount: number
  largeColumnCount: number
  justify: 'left' | 'center' | 'right'
  cards: any[]
}

export const CardBoxBlock: React.FC<
  {
    id?: string
  } & CardBoxType
> = (props) => {
  const getGridColsClass = (count: number) => {
    const gridMap: Record<number, string> = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6',
      7: 'grid-cols-7',
      8: 'grid-cols-8',
      9: 'grid-cols-9',
      10: 'grid-cols-10',
      11: 'grid-cols-11',
      12: 'grid-cols-12',
    }
    return gridMap[count] || 'grid-cols-1'
  }

  const getMdGridColsClass = (count: number) => {
    const gridMap: Record<number, string> = {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5',
      6: 'md:grid-cols-6',
      7: 'md:grid-cols-7',
      8: 'md:grid-cols-8',
      9: 'md:grid-cols-9',
      10: 'md:grid-cols-10',
      11: 'md:grid-cols-11',
      12: 'md:grid-cols-12',
    }
    return gridMap[count] || 'md:grid-cols-1'
  }

  const getLgGridColsClass = (count: number) => {
    const gridMap: Record<number, string> = {
      1: 'lg:grid-cols-1',
      2: 'lg:grid-cols-2',
      3: 'lg:grid-cols-3',
      4: 'lg:grid-cols-4',
      5: 'lg:grid-cols-5',
      6: 'lg:grid-cols-6',
      7: 'lg:grid-cols-7',
      8: 'lg:grid-cols-8',
      9: 'lg:grid-cols-9',
      10: 'lg:grid-cols-10',
      11: 'lg:grid-cols-11',
      12: 'lg:grid-cols-12',
    }
    return gridMap[count] || 'lg:grid-cols-1'
  }

  const getJustifyClass = (justify: string) => {
    switch (justify) {
      case 'left':
        return 'justify-start'
      case 'right':
        return 'justify-end'
      case 'center':
      default:
        return 'justify-center'
    }
  }

  console.log('CardBox justify:', props.justify, 'resulting class:', getJustifyClass(props.justify))

  return (
    <div className="flex flex-col gap-8 px-8 w-full">
      {props.cards && props.cards.length > 0 && (
        <div
          className={`grid ${getGridColsClass(props.smallColumnCount)} ${getMdGridColsClass(props.mediumColumnCount)} ${getLgGridColsClass(props.largeColumnCount)} gap-8 ${getJustifyClass(props.justify)} [&>*]:max-w-none`}
        >
          {props.cards.map((card, index) => {
            if (card.blockType === 'listCard') {
              return (
                <ListCardBlock
                  key={index}
                  id={card.id}
                  title={card.title}
                  subtitle={card.subtitle}
                  content={card.content}
                  listTitle={card.listTitle}
                  listItems={card.listItems}
                />
              )
            } else if (card.blockType === 'featureCard') {
              return (
                <FeatureCardBlock
                  key={index}
                  index={index}
                  id={card.id}
                  title={card.title}
                  subtitle={card.subtitle}
                  content={card.content}
                />
              )
            }
            return <></>
          })}
        </div>
      )}
    </div>
  )
}
