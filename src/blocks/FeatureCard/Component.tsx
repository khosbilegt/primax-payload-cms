interface FeatureCardType {
  title: string
  subtitle: string
  content: string
  index: number
}

export const FeatureCardBlock: React.FC<
  {
    id?: string
  } & FeatureCardType
> = (props) => {
  const { id, title, subtitle, content, index } = props
  return (
    <div className="max-w-md flex flex-col" id={id}>
      <div className="flex flex-col backdrop-blur-md bg-white/10 rounded-lg p-6 border border-white/20 flex-1">
        <p className="text-[120px]" style={{ fontFamily: 'n27regular' }}>
          {index + 1 > 10 ? <span>{index + 1}</span> : <span>0{index + 1}</span>}
        </p>
        <h2 className="text-3xl">{title}</h2>
      </div>
      <div className="p-2 flex-shrink-0">
        <h3 className="mt-4 font-semibold">{subtitle}</h3>
        <p className="mt-4">{content}</p>
      </div>
    </div>
  )
}
