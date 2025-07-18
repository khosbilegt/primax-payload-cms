'use client'
import { useEffect } from 'react'
import { Step } from './Step/Component'

export type StepsBlockType = {
  title: string
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
  useEffect(() => {
    console.log('StepsBlock props:', props)
  }, [props])

  return (
    <div className="w-full flex justify-between px-8">
      <p className="w-[25%] text-3xl">{props.title}</p>
      <div className="flex flex-col gap-4">
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
    </div>
  )
}
