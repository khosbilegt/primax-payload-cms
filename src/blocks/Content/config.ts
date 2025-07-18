import type { Block } from 'payload'
import { ListCardBlock } from '../ListCard/config'
import { TextBlock } from '../Text/config'
import { StepsBlock } from '../StepsBlock/config'

export const ContentBlock: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
  fields: [
    {
      name: 'orientation',
      type: 'radio',
      options: [
        { label: 'Horizontal', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      fields: [
        {
          name: 'width',
          type: 'select',
          options: [
            { label: '1/2', value: '1/2' },
            { label: '1/3', value: '1/3' },
            { label: '1/4', value: '1/4' },
            { label: '1/5', value: '1/5' },
            { label: '1/6', value: '1/6' },
            { label: '1/12', value: '1/12' },
            { label: 'Full', value: 'full' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'full',
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [ListCardBlock, TextBlock, StepsBlock],
          label: 'Content',
        },
      ],
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Contents',
    singular: 'Content',
  },
}
