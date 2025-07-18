import { Block } from 'payload'

export const StatisticBlock: Block = {
  slug: 'statisticBlock',
  interfaceName: 'StatisticBlock',
  fields: [
    {
      name: 'highlight',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
  ],
}
