import { Block } from 'payload'
import { TextBlock } from '../Text/config'

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
      blocks: [TextBlock],
      label: 'Content',
    },
  ],
  graphQL: {
    singularName: 'GradientCardBlock',
  },
}
