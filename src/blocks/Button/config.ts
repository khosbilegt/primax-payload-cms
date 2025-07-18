import { link } from '@/fields/link'
import type { Block } from 'payload'

export const ButtonBlock: Block = {
  slug: 'buttonBlock',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'alighnment',
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      label: 'Alignment',
    },
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
