import { FaArrowRightLong } from 'react-icons/fa6'

interface ButtonBlockType {
  label: string
  link: {
    url: string
    text: string
    newTab: boolean
  }
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
      <a
        href={props.link.url}
        target={props.link.newTab ? '_blank' : '_self'}
        className=" ml-8 flex items-center gap-2 p-2 rounded-3xl border border-accent bg-rounded mt-4 hover:bg-accent hover:text-white transition w-fit"
      >
        <span className="flex items-center gap-2">
          {props.label}
          <FaArrowRightLong />
        </span>
      </a>
    </div>
  )
}
