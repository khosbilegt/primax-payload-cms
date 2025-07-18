import type { Block } from 'payload'
import { Step } from './Step/config'

export const StepsBlock: Block = {
  slug: 'stepsBlock',
  interfaceName: 'StepsBlock',
  imageURL:
    'https://www.awebco.com/wp-content/themes/framework/img/awebco-hero-section-example.jpg',
  fields: [
    {
      name: 'steps',
      type: 'blocks',
      blocks: [Step],
      label: 'Steps',
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
