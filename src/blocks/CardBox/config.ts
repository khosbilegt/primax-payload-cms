import type { Block } from 'payload'
import { ListCardBlock } from '../ListCard/config'

export const CardBoxBlock: Block = {
  slug: 'cardBox',
  interfaceName: 'CardBoxBlock',
  fields: [
    {
      name: 'cards',
      type: 'blocks',
      blocks: [ListCardBlock],
      label: 'Cards',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Card Boxes',
    singular: 'Card Box',
  },
}
