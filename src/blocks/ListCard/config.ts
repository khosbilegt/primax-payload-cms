import { link } from '@/fields/link'
import type { Block } from 'payload'

export const ListCardBlock: Block = {
  slug: 'listCard',
  interfaceName: 'ListCardBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle',
    },
    {
      name: 'content',
      type: 'text',
      label: 'Content',
    },
    {
      name: 'listTitle',
      type: 'text',
      label: 'List Title',
    },
    {
      name: 'listItems',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
          label: 'Item',
        },
      ],
      label: 'List Items',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      label: 'Button Label',
    },
    link({
      appearances: false,
    }),
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'List Card Blocks',
    singular: 'List Card Block',
  },
}
