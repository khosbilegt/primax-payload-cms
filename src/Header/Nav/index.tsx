'use client'

import React, { Fragment } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center p-2">
      {navItems.length === 0 && <span className="text-white">No nav items</span>}
      {navItems.map(({ link }, i) => {
        return (
          <Fragment key={i}>
            <div>
              <CMSLink className="text-white text-lg" {...link} />
            </div>
            {i < navItems.length - 1 && <span className="text-white hidden md:inline">|</span>}
          </Fragment>
        )
      })}
    </nav>
  )
}
