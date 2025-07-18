import { Block } from 'payload'

export const SpacerBlock: Block = {
  slug: 'spacer',
  interfaceName: 'SpacerBlock',
  fields: [
    {
      name: 'height',
      type: 'number',
      label: 'Height (px)',
      defaultValue: 20,
      required: true,
    },
  ],
  labels: {
    singular: 'Spacer',
    plural: 'Spacers',
  },
}
