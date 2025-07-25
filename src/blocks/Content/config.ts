import type { Block } from 'payload'
import { ListCardBlock } from '../ListCard/config'
import { TextBlock } from '../Text/config'
import { StepsBlock } from '../StepsBlock/config'
import { ButtonBlock } from '../Button/config'
import { FormBlock } from '../Form/config'
import { ListBlock } from '../List/config'
import { StatisticBlock } from '../Statistic/config'
import { GradientCardBlock } from '../GradientCard/config'
import { SpacerBlock } from '../Spacer/config'
import { MediaBlock } from '../MediaBlock/config'
import { VideoEmbedBlock } from '../VideoEmbed/config'

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
            { label: '1/12', value: '1/12' },
            { label: '1/6', value: '1/6' },
            { label: '1/5', value: '1/5' },
            { label: '1/4', value: '1/4' },
            { label: '1/3', value: '1/3' },
            { label: '2/5', value: '2/5' },
            { label: '1/2', value: '1/2' },
            { label: '3/5', value: '3/5' },
            { label: '2/3', value: '2/3' },
            { label: '3/4', value: '3/4' },
            { label: '4/5', value: '4/5' },
            { label: '5/6', value: '5/6' },
            { label: 'Full', value: 'full' },
            { label: 'Auto', value: 'auto' },
          ],
          defaultValue: 'full',
        },
        {
          name: 'content',
          type: 'blocks',
          blocks: [
            ListCardBlock,
            TextBlock,
            StepsBlock,
            ButtonBlock,
            FormBlock,
            ListBlock,
            StatisticBlock,
            GradientCardBlock,
            SpacerBlock,
            MediaBlock,
            VideoEmbedBlock,
          ],
          label: 'Content',
        },
      ],
    },
    {
      name: 'hasBorder',
      type: 'checkbox',
      label: 'Border',
      defaultValue: false,
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
