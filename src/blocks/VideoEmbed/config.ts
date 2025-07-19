import { Block } from 'payload'

export const VideoEmbedBlock: Block = {
  slug: 'videoEmbedBlock',
  interfaceName: 'VideoEmbedBlock',
  fields: [
    {
      name: 'url',
      type: 'text',
      required: true,
    },
  ],
  labels: {
    singular: 'Video Embed',
    plural: 'Video Embeds',
  },
}
