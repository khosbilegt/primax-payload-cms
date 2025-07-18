import { ListCardBlock } from '../ListCard/Component'

interface CardBoxType {
  title: string
  subtitle: string
  cards: {
    id: string
    blockType: string
    title: string
    subtitle: string
    content: string
    listTitle: string
    listItems: { item: string }[]
  }[]
}

export const CardBoxBlock: React.FC<
  {
    id?: string
  } & CardBoxType
> = (props) => {
  return (
    <div className="flex flex-col gap-8 px-8">
      {props.title && <h2 className="text-5xl w-full md:w-1/2">{props.title}</h2>}
      {props.subtitle && <h3 className="text-xl text-5xl w-full md:w-1/2">{props.subtitle}</h3>}
      {props.cards && props.cards.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols gap-8 justify-items-center mx-auto">
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
            }
            return <></>
          })}
        </div>
      )}
    </div>
  )
}
