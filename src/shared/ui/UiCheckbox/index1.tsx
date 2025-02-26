import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls = ''
const inpCls = ''
const labelCls = ''

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: ReactNode
  inputClassName?: string
  labelClassName?: string
}
const UiCheckbox: FC<Props> = ({ label, className, inputClassName, labelClassName, ...inpProps }) => {
  return (
    <label className={cn([wrapperCls, className])}>
      <input type="checkbox" {...inpProps} className={cn([inputClassName, inpCls])} />
      {label && (
        <UiTypography font="PlusJakartaSans-R" tag="p" className={cn([labelCls, labelClassName])}>
          {label}
        </UiTypography>
      )}
    </label>
  )
}

export { UiCheckbox }
