import { useMergeRefs } from '@floating-ui/react'
import { HTMLProps, RefAttributes, cloneElement, forwardRef, isValidElement } from 'react'

import { useTooltipContext } from './TooltipContext'

export const TooltipTrigger = forwardRef<
  HTMLElement,
  HTMLProps<HTMLElement> & { asChild?: boolean }
>(function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
  const context = useTooltipContext()
  const childrenRef = (children as RefAttributes<HTMLElement>).ref
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef])

  // `asChild` allows the user to pass any element as the anchor
  if (asChild && isValidElement(children)) {
    return cloneElement(
      children,
      context.getReferenceProps({
        ref,
        ...props,
        ...children.props,
        'data-state': context.open ? 'open' : 'closed',
      })
    )
  }

  return (
    <button
      ref={ref}
      // The user can style the trigger based on the state
      data-state={context.open ? 'open' : 'closed'}
      {...context.getReferenceProps(props)}
    >
      {children}
    </button>
  )
})
