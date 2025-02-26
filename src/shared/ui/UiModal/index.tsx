import { FC, MouseEventHandler } from 'react'
import { TChildren, TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TModalSlug, useModals } from '@/shared/store/useModals'
import { UiPortalWrapper } from '../UiPortalWrapper'

const wrapperCls = ''
const contentCls = ''

export interface TUiModalProps extends TClassName, TModalSlug, TChildren {
  customContent?: boolean
  IsXCenter?: boolean
  IsYCenter?: boolean
  onClose?: MouseEventHandler
  WrapperTag?: TTag
  ContentTag?: TTag
}
const UiModal: FC<TUiModalProps> = ({
  className,
  IsXCenter,
  IsYCenter,
  customContent,
  onClose,
  slug,
  ContentTag = 'div',
  WrapperTag = 'section',
  children,
}) => {
  const modalState = useModals((state) => state.modalsState[slug])

  const handleClose: MouseEventHandler = (event) => {
    onClose && onClose(event)
  }

  return (
    <UiPortalWrapper selector="#modals">
      {modalState ? (
        <WrapperTag onClick={handleClose} className={cn([wrapperCls, className])}>
          {!customContent ? <ContentTag className={contentCls}>{children}</ContentTag> : children}
        </WrapperTag>
      ) : null}
    </UiPortalWrapper>
  )
}

export { UiModal }
