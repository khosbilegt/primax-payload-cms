import { Page, Post } from '@/payload-types'
import { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

interface ButtonBlockType {
  label: string
  link: {
    url: string
    text: string
    newTab: boolean
    reference?: {
      relationTo: 'pages' | 'posts'
      value: Page | Post | string | number
    } | null
  }
  isPointerButton?: boolean
  alignment?: 'left' | 'center' | 'right'
}

export const ButtonBlock: React.FC<
  {
    id?: string
  } & ButtonBlockType
> = (props) => {
  return (
    <div
      className={`w-full flex ${props.alignment === 'left' ? 'justify-left' : props.alignment === 'right' ? 'justify-right' : 'justify-center'}`}
    >
      {props.isPointerButton ? (
        <a
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
          target={props.link.newTab ? '_blank' : '_self'}
          className=" ml-8 flex items-center gap-2 p-2 rounded-3xl border border-accent bg-rounded mt-4 hover:bg-accent hover:text-white transition w-fit"
        >
          <span className="flex items-center gap-2">
            {props.label}
            <FaArrowRightLong />
          </span>
        </a>
      ) : (
        <a
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
          target={props.link.newTab ? '_blank' : '_self'}
          className=" ml-8 flex items-center gap-2 p-2 px-4 rounded-3xl border bg-rounded mt-4 hover:bg-black hover:text-accent bg-white text-black transition w-fit"
        >
          <span className="flex items-center gap-2">{props.label}</span>
        </a>
      )}
    </div>
  )
}
