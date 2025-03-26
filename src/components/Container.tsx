import React, { forwardRef } from 'react'
import clsx from 'clsx'

export const ContainerOuter = forwardRef(function ContainerOuter(
  props: { children: React.ReactNode } & React.ComponentPropsWithoutRef<'div'>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return(
    <div ref={ref} className={clsx('sm:px-8', props.className)} {...props}>
      <div className="mx-auto w-full max-w-7xl lg:px-8">{props.children}</div>
    </div>
  )
});

export const ContainerInner = forwardRef(function ContainerInner(
  props: {children: React.ReactNode} & React.ComponentPropsWithoutRef<'div'>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', props.className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{props.children}</div>
    </div>
  )
});

export const Container = forwardRef(function Container(
  props: {children: React.ReactNode} & React.ComponentPropsWithoutRef<typeof ContainerOuter>,
  ref: React.ForwardedRef<HTMLDivElement>,
) {
  return (
    <ContainerOuter ref={ref} {...props}>
      <ContainerInner>{props.children}</ContainerInner>
    </ContainerOuter>
  )
});