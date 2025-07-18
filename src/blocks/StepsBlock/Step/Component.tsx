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
    <div className="relative flex items-center gap-10 p-10 rounded-3xl border">
      <p
        className="text-[120px] font-bold text-white opacity-10 bg-gradient-to-b from-white/20 to-transparent bg-clip-text text-transparent select-none"
        style={{
          fontFamily: 'n27regular',
        }}
      >
        {props.number > 10 ? props.number : `0${props.number}`}
      </p>
      <div className="w-[100px]" />
      <div className="flex flex-col text-left align-center justify-center gap-2">
        <p className="text-3xl">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}
