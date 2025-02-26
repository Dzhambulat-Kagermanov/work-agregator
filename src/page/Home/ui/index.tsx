'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { SignInModal } from '@/widgets/SignInModal'
import { useModals } from '@/shared/store/useModals'
import { SIGN_IN_MODAL, SIGN_UP_MODAL } from '@/shared/constants'
import { SignUpModal } from '@/widgets/SignUpModal'

const pageCls = ''

interface Props extends TClassName {}
const HomePage: FC<Props> = ({ className }) => {
  const showModal = useModals((state) => state.showModal)

  return (
    <main className={cn([pageCls, className])}>
      <button
        onClick={() => {
          showModal({ slug: SIGN_IN_MODAL })
        }}
      >
        Открыть вход
      </button>
      <button
        onClick={() => {
          showModal({ slug: SIGN_UP_MODAL })
        }}
      >
        Открыть регистрацию
      </button>
      <SignInModal />
      <SignUpModal />
    </main>
  )
}

export { HomePage }
