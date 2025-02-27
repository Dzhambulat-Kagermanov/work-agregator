import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiTypography, UiVerificationInput } from '@/shared/ui'
import { cn } from '@/shared/lib'

const wrapperCls = ''
const textCls = 'text-darkBlue100'

interface Props extends TClassName {}
const VerificationBlock: FC<Props> = ({ className }) => {
  return (
    <div className={cn([wrapperCls, className])}>
      <UiTypography font="Montserrat-R" tag="h4" className={textCls}>
        Введите полученный код
      </UiTypography>
      <UiVerificationInput className="mt-2" length={6} />
    </div>
  )
}

export { VerificationBlock }
