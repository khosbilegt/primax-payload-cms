import { Block } from 'payload'

export const GradientCardBlock: Block = {
  slug: 'gradientCardBlock',
  interfaceName: 'GradientCardBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
  graphQL: {
    singularName: 'GradientCardBlock',
  },
}
