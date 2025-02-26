'use client'
import { CloseIcon } from '@/shared/icons'
import { cn, getTailwindColor } from '@/shared/lib'
import { TModalSlug, useModals } from '@/shared/store/useModals'
import { ButtonHTMLAttributes, FC, MouseEventHandler } from 'react'

const wrapperCls = 'duration-100 hover:scale-[1.1]'

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'type'>, TModalSlug {}
const CloseModalButton: FC<Props> = ({ className, onClick, slug, ...btnProps }) => {
  const hideModal = useModals((state) => state.hideModal)
  const handleClose: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick && onClick(event)
    hideModal({ slug })
  }

  return (
    <button type="button" onClick={handleClose} className={cn([wrapperCls, className])} {...btnProps}>
      <CloseIcon fill={getTailwindColor('blackBase')} />
    </button>
  )
}

export { CloseModalButton }
