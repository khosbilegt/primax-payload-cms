interface GradientCardType {
  title: string
  description: string
}

export const GradientCardBlock: React.FC<
  {
    id?: string
  } & GradientCardType
> = (props) => {
  return (
    <div
      className="relative flex flex-col gap-4 rounded-3xl border text-white p-8 mx-8"
      style={{
        background: 'linear-gradient(135deg, #a0522d 0%, #8b4513 50%, #654321 100%)',
      }}
    >
      <h2 className="text-2xl font-bold">{props.title}</h2>
      <p className="text-base">{props.description}</p>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-10 rounded-3xl" />
    </div>
  )
}
