interface SpacerType {
  height: number
}

export const SpacerBlock: React.FC<
  {
    id?: string
  } & SpacerType
> = (props) => {
  const { height } = props

  return <div id={props.id} style={{ height: `${height}px` }} className="w-full" />
}
