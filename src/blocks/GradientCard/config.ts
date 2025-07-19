import { Block } from 'payload'
import { TextBlock } from '../Text/config'
import { ButtonBlock } from '../Button/config'

export const GradientCardBlock: Block = {
  slug: 'gradientCardBlock',
  interfaceName: 'GradientCardBlock',
  fields: [
    {
      name: 'backgroundColorCss',
      type: 'text',
      label: 'Background Color CSS',
      defaultValue: '',
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [TextBlock, ButtonBlock],
      label: 'Content',
    },
  ],
  graphQL: {
    singularName: 'GradientCardBlock',
  },
}
