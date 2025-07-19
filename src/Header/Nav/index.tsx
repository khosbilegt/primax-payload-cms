'use client'

import React, { Fragment } from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  console.log('HeaderNav data:', data)
  console.log('HeaderNav navItems:', navItems)

  return (
    <nav className="flex gap-3 items-center p-2">
      {navItems.length === 0 && <span className="text-white">No nav items</span>}
      {navItems.map(({ link }, i) => {
        console.log(`NavItem ${i}:`, link)
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
