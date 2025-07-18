import { link } from '@/fields/link'
import type { Block } from 'payload'

export const ButtonBlock: Block = {
  slug: 'buttonBlock',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'alignment',
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
      label: 'Alignment',
    },
    {
      name: 'isPointerButton',
      type: 'checkbox',
      label: 'Pointer Button',
      defaultValue: false,
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
