import { Step } from './Step/Component'

export type StepsBlockType = {
  steps: {
    id: string
    blockType: string
    title: string
    description: string
    number: number
  }[]
}

export const StepsBlock: React.FC<
  {
    id?: string
  } & StepsBlockType
> = (props) => {
  return (
    <div className="flex flex-col gap-10">
      {(props?.steps ? props?.steps : []).map((step, index) => {
        if (step.blockType === 'stepsBlockStep') {
          return (
            <Step
              key={index}
              id={step.id}
              title={step.title}
              description={step.description}
              number={step.number}
            />
          )
        }
      })}
    </div>
  )
}
