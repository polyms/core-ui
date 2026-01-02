import classNames from 'classnames'
import { HTMLProps, forwardRef, useId, useLayoutEffect } from 'react'

import { usePopoverContext } from './PopoverContext'

export const PopoverHeading = forwardRef<
  HTMLHeadingElement,
  HTMLProps<HTMLHeadingElement>
>(function PopoverHeading({ className, ...props }, ref) {
  const { setLabelId } = usePopoverContext()
  const id = useId()

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2 {...props} className={classNames(className, 'popover-header')} ref={ref} id={id}>
      {props.children}
    </h2>
  )
})
