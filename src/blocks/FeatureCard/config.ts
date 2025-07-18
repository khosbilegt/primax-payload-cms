import { Block } from 'payload'

export const FeatureCardBlock: Block = {
  slug: 'featureCard',
  interfaceName: 'FeatureCardBlock',
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
  ],
}
