import React from 'react'
import RichText from '@/components/RichText'

interface StepType {
  title: any // Could be string or rich text object
  description: string
  number: number
}

export const Step: React.FC<
  {
    id?: string
  } & StepType
> = (props) => {
  return (
    <div className="relative flex flex-col md:flex-row items-center gap-4 md:gap-10 p-6 md:p-10 rounded-3xl border overflow-hidden">
      <div className="flex-shrink-0 md:w-1/2">
        <p
          className="text-[100px] xl:text-[120px] font-bold text-white opacity-10 bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent select-none"
          style={{
            fontFamily: 'n27regular',
          }}
        >
          {props.number > 10 ? props.number : `0${props.number}`}
        </p>
      </div>
      <div className="flex flex-col text-center md:text-left align-center justify-center gap-2 min-w-0 flex-1 md:w-1/2">
        <p className="text-xl md:text-3xl break-words">{props.title}</p>
        <p className="text-sm md:text-base break-words">{props.description}</p>
      </div>
    </div>
  )
}
