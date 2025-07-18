interface ListBlockType {
  listItems: Array<{
    title: string
    item: string
  }>
}

export const ListBlock: React.FC<
  {
    id?: string
  } & ListBlockType
> = (props) => {
  return (
    <div className="p-8">
      {props.listItems && props.listItems.length > 0 && (
        <ul className="decoration-none list-none">
          {props.listItems.map((item, index) => (
            <li key={index} className="text-base border-b border-white py-2">
              {item.title ? (
                <div className="flex justify-between items-center">
                  <span className="font-medium w-1/3">{item.title}</span>
                  <span className="w-2/3">{item.item}</span>
                </div>
              ) : (
                item.item
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
