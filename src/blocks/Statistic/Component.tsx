interface StatisticType {
  highlight: string
  subtitle: string
}

export const StatisticBlock: React.FC<
  {
    id?: string
  } & StatisticType
> = (props) => {
  return (
    <div className="flex flex-col  p-6">
      <h2 className="text-3xl font-bold">{props.highlight}</h2>
      <p className="mt-2 text-md font-light">{props.subtitle}</p>
    </div>
  )
}
