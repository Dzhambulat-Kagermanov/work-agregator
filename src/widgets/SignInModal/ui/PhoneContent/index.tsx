import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiInputMaskSwitch, UiTypography } from '@/shared/ui'
import { phoneMasks } from '@/shared/constants/input-masks'
import { RussianFlagIcon } from '@/shared/icons'

const wrapperCls = 'w-full'
const maskItemCls = 'flex items-center gap-x-3'

interface Props extends TClassName {}
const PhoneContent: FC<Props> = ({ className }) => {
  const phoneMasksKeys = Object.keys(phoneMasks)

  return (
    <UiInputMaskSwitch
      masks={phoneMasks}
      items={phoneMasksKeys.map((key) => {
        return {
          value: key,
          content: (
            <UiTypography font="Montserrat-B" tag="p" className={maskItemCls}>
              {phoneMasks[key].prefix}
            </UiTypography>
          ),
        }
      })}
      type="text"
      className={cn([wrapperCls, className])}
    />
  )
}

export { PhoneContent }
