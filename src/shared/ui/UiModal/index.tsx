'use client'
import { FC, MouseEventHandler, useEffect } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TModalSlug, useModals } from '@/shared/store/useModals'
import { UiPortalWrapper } from '../UiPortalWrapper'

const wrapperCls = 'fixed bg-blackBase80 inset-0 overflow-auto opacity-0 duration-150 cursor-pointer'
const wrapperActiveCls = 'opacity-100'
const contentWrapperCls = 'w-full h-full pointer-events-none'
const contentCls = 'pointer-events-auto cursor-default'

export interface TUiModalProps extends TClassName, TModalSlug, TChildren {
  isXCenter?: boolean
  isYCenter?: boolean
  onClose?: MouseEventHandler
  WrapperTag?: TTag
  ContentTag?: TTag
  unmountDelay?: number
  contentClassName?: string
}
const UiModal: FC<TUiModalProps> = ({
  className,
  isXCenter,
  isYCenter,
  onClose,
  slug,
  ContentTag = 'div',
  WrapperTag = 'section',
  children,
  unmountDelay,
  contentClassName,
}) => {
  const changeUnmountDelay = useModals((state) => state.changeUnmountDelay)
  const hideModal = useModals((state) => state.hideModal)
  const visibleState = useModals((state) => state.modalsState[slug]?.visibleState)
  const mountedState = useModals((state) => state.modalsState[slug]?.mountedState)

  useEffect(() => {
    if (unmountDelay) changeUnmountDelay({ slug, unmountDelay })
  }, [])

  const handleClose: MouseEventHandler = (event) => {
    onClose && onClose(event)
    hideModal({ slug })
  }

  return (
    <UiPortalWrapper selector="#modals">
      {mountedState ? (
        <WrapperTag
          onClick={handleClose}
          className={cn([wrapperCls, className], {
            [wrapperActiveCls]: visibleState,
          })}
        >
          <div
            className={cn([contentWrapperCls], {
              ['flex']: isXCenter || isYCenter,
              ['items-center']: isYCenter,
              ['justify-center']: isXCenter,
            })}
          >
            <ContentTag onClick={(e) => e.stopPropagation()} className={cn([contentCls, contentClassName])}>
              {children}
            </ContentTag>
          </div>
        </WrapperTag>
      ) : null}
    </UiPortalWrapper>
  )
}

export { UiModal }
