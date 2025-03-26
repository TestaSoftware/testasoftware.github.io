import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'
import { Link as ReactRouterLink } from 'react-router'

export const Link = forwardRef(function Link(
  props: { href: string, children?: React.ReactNode } & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>,
) {
  return (
    <Headless.DataInteractive>
      <ReactRouterLink to={props.href} ref={ref} className={props.className}>{props.children ?? ""}</ReactRouterLink>
    </Headless.DataInteractive>
  )
})
