import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Footer } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Fragment } from 'react'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footerData?.navItems || []

  return (
    <footer className="mt-auto border-t border-border bg-black dark:bg-card text-white">
      <div className="w-full px-4 py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4 md:items-center">
            {navItems.map(({ link }, i) => {
              return (
                <Fragment key={i}>
                  <CMSLink className="text-white" {...link} />
                  {i < navItems.length - 1 && (
                    <span className="text-white hidden md:inline">|</span>
                  )}
                </Fragment>
              )
            })}
          </nav>
        </div>

        <div className="flex gap-4">
          <p>© PRiMAX Pty Ltd, 2025. All Rights Reserved.</p>
          <p>Designed by Extrablack</p>
        </div>
      </div>
    </footer>
  )
}
