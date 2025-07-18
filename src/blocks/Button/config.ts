import { link } from '@/fields/link'
import type { Block } from 'payload'

export const ButtonBlock: Block = {
  slug: 'buttonBlock',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Button Label',
    },
    link({
      appearances: false,
    }),
  ],
}
