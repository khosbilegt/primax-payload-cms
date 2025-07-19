import { link } from '@/fields/link'
import { Block } from 'payload'

export const ProjectCardBlock: Block = {
  slug: 'projectCard',
  interfaceName: 'ProjectCard',
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'status',
      type: 'text',
      label: 'Status',
      required: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    link({
      appearances: false,
    }),
  ],
  graphQL: {
    singularName: 'ProjectCardBlock',
  },
  labels: {
    plural: 'Project Cards',
    singular: 'Project Card',
  },
}
