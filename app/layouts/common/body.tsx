import type React from 'react'
import { Link, useMatches, type UIMatch } from 'react-router'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '~/components/ui/breadcrumb'
import type { Handle } from '~/types'

export default function BodyLayout({ children }: { children: React.ReactNode }) {
  const matches = useMatches() as UIMatch<unknown, Handle>[]
  const crumbs = matches
    .map(({ handle, pathname }) => {
      return handle?.breadcrumb ? { handle, pathname } : null
    })
    .filter((c) => c !== null)
  return (
    <div className='p-4 sm:ml-64'>
      <div className='mt-14'>
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map(({ handle, pathname }, index) => {
              const isLast = index === crumbs.length - 1
              return (
                <BreadcrumbItem key={pathname}>
                  {isLast ? (
                    <BreadcrumbPage>{handle?.breadcrumb}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink href={pathname}>{handle?.breadcrumb}</BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </>
                  )}
                </BreadcrumbItem>
              )
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {children}
    </div>
  )
}
