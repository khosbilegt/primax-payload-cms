import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Footer, Social } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'
import { Fragment } from 'react'
import { Input } from '@/components/ui/input'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export async function Footer() {
  const footerData: Footer = await getCachedGlobal('footer', 1)()
  const socialsData: Social = await getCachedGlobal('socials', 1)()

  const socialItems = socialsData?.navItems || []
  const navItems = footerData?.navItems || []

  const links = [
    {
      label: 'Products',
      url: '/',
    },
    {
      label: 'Urbanity 2025',
      url: '/urbanity-2025',
    },
    {
      label: 'Book a demo',
      url: '/book-a-demo',
    },
  ]

  const logos = {
    Instagram: FaInstagram,
    LinkedIn: FaLinkedin,
  }

  return (
    <footer className="mt-auto bg-transparent text-white pt-4 px-8">
      <div className="flex justify-between">
        <p className="text-5xl w-[50%]">Where human intent meets property intelligence</p>
        <div className="flex flex-col gap-2 w-[10%]">
          {links.map((link, index) => (
            <CMSLink key={index} className="text-white text-lg" url={link.url}>
              {link.label}
            </CMSLink>
          ))}
        </div>
        <div className="w-[25%] flex flex-col gap-6">
          <p className="text-xl ">Stay connected</p>
          <p>Join our mailing list to stay up to date with all PriMAX news.</p>
          <Input placeholder="Email address*" className="border-accent" />
          <div className="flex gap-2 ">
            {socialItems.map(({ link }, i) => {
              return (
                <CMSLink key={i} className="text-white text-sm border-accent" url={link.url} newTab>
                  {(() => {
                    const Icon = logos[link.label as keyof typeof logos]
                    return Icon ? <Icon className="w-6 h-6" aria-label={link.label} /> : null
                  })()}
                </CMSLink>
              )
            })}
          </div>
          <p>
            We acknowledge the Traditional Custodians of the lands on which we work and live and
            recognise their ongoing connection to Country. We pay our respects to Elders past and
            present.
          </p>
        </div>
      </div>
      <div className="w-full px-4 py-8 gap-8 flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
          <nav className="flex flex-col md:flex-row gap-4 md:items-center">
            {navItems.map(({ link }, i) => {
              return (
                <Fragment key={i}>
                  <CMSLink className="text-white text-sm" {...link} />
                  {i < navItems.length - 1 && (
                    <span className="text-white hidden md:inline">|</span>
                  )}
                </Fragment>
              )
            })}
          </nav>
        </div>

        <div className="flex gap-4 text-sm">
          <p>© PRiMAX Pty Ltd, 2025. All Rights Reserved.</p>
          <p>Designed by Extrablack</p>
        </div>
      </div>
    </footer>
  )
}
