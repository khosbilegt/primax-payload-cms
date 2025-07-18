import type { Block } from 'payload'

export const ListBlock: Block = {
  slug: 'listBlock',
  interfaceName: 'ListBlock',
  fields: [
    {
      name: 'listItems',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
        },
        {
          name: 'item',
          type: 'text',
          label: 'Item',
        },
      ],
      label: 'List Items',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'List Blocks',
    singular: 'List Blocks',
  },
}
