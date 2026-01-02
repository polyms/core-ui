import classNames from 'classnames'
import { HTMLProps, forwardRef, useId, useLayoutEffect } from 'react'

import { usePopoverContext } from './PopoverContext'

export const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  HTMLProps<HTMLParagraphElement>
>(function PopoverDescription({ className, ...props }, ref) {
  const { setDescriptionId } = usePopoverContext()
  const id = useId()

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <div {...props} className={classNames(className, 'popover-body')} ref={ref} id={id} />
  )
})
