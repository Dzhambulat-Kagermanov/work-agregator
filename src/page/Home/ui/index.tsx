'use client'
import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { SignInModal } from '@/widgets/SignInModal'
import { useModals } from '@/shared/store/useModals'
import { SIGN_IN_MODAL } from '@/shared/constants'

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
      <button>Открыть регистрацию</button>
      <SignInModal />
    </main>
  )
}

export { HomePage }
