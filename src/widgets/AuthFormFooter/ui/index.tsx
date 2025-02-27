'use client'
import { FC, MouseEventHandler } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '@/shared/ui'
import Link from 'next/link'
import { useModals } from '@/shared/store/useModals'
import { SIGN_IN_MODAL, SIGN_UP_MODAL } from '@/shared/constants'

const wrapperCls = 'text-center'
const linkCls = 'text-blueBase inline'
const textCls = ''

interface Props extends TClassName {}
const AuthFormFooter: FC<Props> = ({ className }) => {
  const hideModal = useModals((state) => state.hideModal)
  const showModal = useModals((state) => state.showModal)
  const handleRegistration: MouseEventHandler = (event) => {
    hideModal({ slug: SIGN_IN_MODAL })
    showModal({ slug: SIGN_UP_MODAL })
  }

  return (
    <div className={cn([wrapperCls, className])}>
      <UiTypography font="Montserrat-R" tag="p" className={textCls}>
        Еще нет аккаунта?{' '}
        <button className={cn([textCls, linkCls])} type="button" onClick={handleRegistration}>
          <UiTypography font="Montserrat-B" tag="span">
            Регистрация
          </UiTypography>
        </button>
      </UiTypography>
      <Link href={'#'} className={cn([textCls, linkCls, 'block mt-2'])}>
        <UiTypography font="Montserrat-B" tag="p">
          Проблема при входе?
        </UiTypography>
      </Link>
    </div>
  )
}

export { AuthFormFooter }
