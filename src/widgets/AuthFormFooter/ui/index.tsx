import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '@/shared/ui'
import Link from 'next/link'

const wrapperCls = 'text-center'
const linkCls = 'text-blueBase'
const textCls = ''

interface Props extends TClassName {}
const AuthFormFooter: FC<Props> = ({ className }) => {
  return (
    <div className={cn([wrapperCls, className])}>
      <UiTypography font="PlusJakartaSans-R" tag="p" className={textCls}>
        Еще нет аккаунта?{' '}
        <Link href={'#'} className={cn([textCls, linkCls])}>
          <UiTypography font="PlusJakartaSans-B" tag="span">
            Регистрация
          </UiTypography>
        </Link>
      </UiTypography>
      <Link href={'#'} className={cn([textCls, linkCls, 'mt-4'])}>
        <UiTypography font="PlusJakartaSans-B" tag="p">
          Проблема при входе?
        </UiTypography>
      </Link>
    </div>
  )
}

export { AuthFormFooter }
