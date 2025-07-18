'use client'
import { useEffect } from 'react'
import { TextBlock } from '../Text/Component'

interface ContentBlockType {
  orientation: 'horizontal' | 'vertical'
  columns: {
    width: '1/2' | '1/3' | '1/4' | '1/5' | '1/6' | '1/12' | 'full' | 'auto'
    content: any[]
  }[]
}

export const ContentBlock: React.FC<
  {
    id?: string
  } & ContentBlockType
> = (props) => {
  useEffect(() => {
    console.log(props)
  }, [props])
  return (
    <div className={`flex ${props.orientation === 'vertical' ? 'flex-col' : ''}`}>
      {props.columns?.map((column: any, index) => (
        <div key={index} className={`w-${column.width}`}>
          {column.content.map((content: any, contentIndex: number) => {
            if (content.blockType === 'textBlock') {
              return (
                <TextBlock
                  key={contentIndex}
                  content={content?.content ? (content?.content as string) : ''}
                  id={content.id}
                  alignment={content?.alignment ? content?.alignment : 'left'}
                  size={content?.size ? content?.size : 'small'}
                />
              )
            }
            return <div key={contentIndex}>Unsupported content type</div>
          })}
        </div>
      ))}
    </div>
  )
}
