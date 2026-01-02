import classNames from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

import { usePopoverContext } from './PopoverContext'

export const PopoverClose = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement>
>(function PopoverClose({ className, ...props }, ref) {
  const { setOpen } = usePopoverContext()
  return (
    <button
      type='button'
      ref={ref}
      {...props}
      className={classNames(className, 'btn')}
      onClick={(event) => {
        props.onClick?.(event)
        setOpen(false)
      }}
    />
  )
})
