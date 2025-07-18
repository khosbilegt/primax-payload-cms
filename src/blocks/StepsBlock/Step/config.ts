import type { Block } from 'payload'

export const Step: Block = {
  slug: 'stepsBlockStep',
  interfaceName: 'StepsBlockStep',
  imageURL:
    'https://www.awebco.com/wp-content/themes/framework/img/awebco-hero-section-example.jpg',
  fields: [
    {
      name: 'number',
      type: 'number',
      label: 'Number',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      label: 'Description',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Steps Blocks',
    singular: 'Steps Block',
  },
}
