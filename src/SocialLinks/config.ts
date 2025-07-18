import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateSocials } from './hooks/revalidateSocials'

export const Socials: GlobalConfig = {
  slug: 'socials',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/SocialLinks/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateSocials],
  },
}
