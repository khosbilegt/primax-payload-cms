import { Button } from '@payloadcms/ui'
import { FaArrowRightLong } from 'react-icons/fa6'

interface ListCardType {
  title: string
  subtitle: string
  content: string
  listTitle: string
  listItems: { item: string }[]
}

export const ListCardBlock: React.FC<
  {
    id?: string
  } & ListCardType
> = (props) => {
  return (
    <div className="border border-accent rounded-3xl p-4 flex flex-col justify-between ">
      {props.title && <h2 className="text-3xl">{props.title}</h2>}
      {props.subtitle && <h3 className="text-xl mt-8">{props.subtitle}</h3>}
      {props.content && <p className="text-base mt-8">{props.content}</p>}
      {props.listTitle && (
        <h4 className="text-lg font-medium border-b border-white mt-8">{props.listTitle}</h4>
      )}
      {props.listItems && props.listItems.length > 0 && (
        <ul className="decoration-none list-none">
          {props.listItems.map((item, index) => (
            <li key={index} className="text-base border-b border-white py-2">
              {item.item}
            </li>
          ))}
        </ul>
      )}
      <Button className="flex items-center gap-2 p-2 rounded-3xl border border-accent bg-rounded mt-4 hover:bg-accent hover:text-white transition w-fit">
        <span className="flex items-center gap-2">
          See more
          <FaArrowRightLong />
        </span>
      </Button>
    </div>
  )
}
