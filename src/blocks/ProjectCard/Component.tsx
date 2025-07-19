'use client'
import { useState } from 'react'
import { Page, Post } from '@/payload-types'

interface ProjectCardType {
  name: string
  status: string
  icon?: {
    url: string
    alt?: string
    sizes: {
      thumbnail: string
      square: string
      small: string
      medium: string
      large: string
      xlarge: string
      og: string
    }
  }
  link: {
    url: string
    text: string
    newTab: boolean
    reference?: {
      relationTo: 'pages' | 'posts'
      value: Page | Post | string | number
    } | null
  }
}

export const ProjectCardBlock: React.FC<
  {
    id?: string
  } & ProjectCardType
> = (props) => {
  const { id, name, status, icon } = props
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      className="relative flex flex-col items-center justify-between h-[324px] p-4 transition-all duration-300 overflow-hidden rounded-lg transition"
      style={{
        background: isHovered
          ? 'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.55) 0%, rgba(255, 255, 255, 0.10) 100%)'
          : 'radial-gradient(107.32% 141.42% at 0% 0%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.00) 100%)',
      }}
      id={id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={
        props.link.reference
          ? typeof props.link.reference.value === 'string'
            ? props.link.reference.value
            : typeof props.link.reference.value === 'number'
              ? props.link.reference.value.toString()
              : typeof props.link.reference.value === 'object' &&
                  props.link.reference.value !== null &&
                  'slug' in props.link.reference.value
                ? `/` + (props.link.reference.value as Page | Post).slug
                : props.link.url
          : props.link.url
      }
    >
      <p></p>
      {icon && <img src={icon.url} alt={icon.alt || 'Project Icon'} className="h-1/2" />}
      <div className="w-full flex justify-between items-center">
        <h3>{name}</h3>
        <p>{status}</p>
      </div>
    </a>
  )
}
