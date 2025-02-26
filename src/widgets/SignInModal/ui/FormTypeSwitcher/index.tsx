'use client'
import { FC, useCallback } from 'react'
import { TClassName, TState } from '@/shared/types'
import { UiBlocksSwitcher, UiTypography } from '@/shared/ui'
import { EnFormType } from '..'
import { cn } from '@/shared/lib'

const wrapperCls = ''
const itemCls = 'flex items-center justify-center'
const itemTextCls = 'text-xl'

interface Props extends TClassName {
  setFormType: TState<EnFormType>
}
const FormTypeSwitcher: FC<Props> = ({ className, setFormType }) => {
  const handleSwitchChange = useCallback((value: string) => {
    if (value === EnFormType.email) setFormType(EnFormType.email)
    else if (value === EnFormType.phone) setFormType(EnFormType.phone)
  }, [])

  return (
    <UiBlocksSwitcher
      onChange={handleSwitchChange}
      className={cn([wrapperCls, className])}
      defaultActiveItemValue="Телефон"
      itemClassName={itemCls}
      items={[
        {
          content: (
            <UiTypography font="PlusJakartaSans-R" tag="p" className={itemTextCls}>
              Телефон
            </UiTypography>
          ),
          value: EnFormType.phone,
          onSelect: () => {},
        },
        {
          content: (
            <UiTypography font="PlusJakartaSans-R" tag="p" className={itemTextCls}>
              Почта
            </UiTypography>
          ),
          value: EnFormType.email,
          onSelect: () => {},
        },
      ]}
    />
  )
}

export { FormTypeSwitcher }
