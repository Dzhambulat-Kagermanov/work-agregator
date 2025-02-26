import { cn } from '@/shared/lib'
import { FC, InputHTMLAttributes } from 'react'
import { UiTypography } from '../UiTypography'

const wrapperCls = ''
const labelCls = 'text-darkBlue100'
const inputCls =
  'w-full font-plusJakarta text-lg placeholder:text-lg placeholder:text-greyBase py-4 px-[10px] border-[1px] border-solid border-blue100 rounded-[25px]'
const inputErrorCls = 'border-redBase'
const errorCls = 'text-redBase'

interface TUiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
}
const UiInput: FC<TUiInputProps> = ({ className, label, errorMessage, ...inpProps }) => {
  return (
    <div className={cn([wrapperCls, className])}>
      {label && (
        <UiTypography font="PlusJakartaSans-R" tag="p" className={labelCls}>
          {label}
        </UiTypography>
      )}
      <input
        {...inpProps}
        className={cn([inputCls, className], {
          [inputErrorCls]: !!errorMessage,
        })}
      />
      {errorMessage && (
        <UiTypography font="PlusJakartaSans-R" tag="p" className={errorCls}>
          {errorMessage}
        </UiTypography>
      )}
    </div>
  )
}

export { UiInput, type TUiInputProps }
