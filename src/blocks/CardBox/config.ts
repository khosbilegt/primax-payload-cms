import type { Block } from 'payload'
import { ListCardBlock } from '../ListCard/config'
import { FeatureCardBlock } from '../FeatureCard/config'
import { ProjectCardBlock } from '../ProjectCard/config'

export const CardBoxBlock: Block = {
  slug: 'cardBox',
  interfaceName: 'CardBoxBlock',
  fields: [
    {
      name: 'smallColumnCount',
      type: 'number',
      required: true,
      min: 1,
      max: 4,
      defaultValue: 3,
    },
    {
      name: 'mediumColumnCount',
      type: 'number',
      required: true,
      min: 1,
      max: 6,
      defaultValue: 4,
    },
    {
      name: 'largeColumnCount',
      type: 'number',
      required: true,
      min: 1,
      max: 6,
      defaultValue: 4,
    },
    {
      name: 'justify',
      type: 'radio',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
      ],
    },
    {
      name: 'isBlurred',
      type: 'checkbox',
      label: 'Blur Background',
      defaultValue: false,
    },
    {
      name: 'cards',
      type: 'blocks',
      blocks: [ListCardBlock, FeatureCardBlock, ProjectCardBlock],
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
