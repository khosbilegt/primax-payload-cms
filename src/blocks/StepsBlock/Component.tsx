import { Step } from './Step/Component'
import { Button } from '@payloadcms/ui'

export type StepsBlockType = {
  title: string
  link: {
    label: string
    reference: {
      relationTo: string
      value: {
        title: string
        slug: string
        id: string
      }
    }
  }
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

          <Button className="bg-accent dark:bg-white dark:text-black dark:hover:bg-accent font-bold py-2 px-4 rounded-3xl transition w-fit">
            {props.link.label}
          </Button>
        </div>
      </div>
    </div>
  )
}
