import { cn } from '@/shared/lib'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { UiTypography } from '../UiTypography'

const wrapperCls = ''
const labelCls = 'text-darkBlue100'
const inputCls = 'w-full font-montserrat text-lg placeholder:text-lg placeholder:text-greyBase flex-1'
const inputErrorCls = 'border-redBase'
const errorCls = 'text-redBase'
const inputWrapperCls =
  'flex items-center gap-x-2 py-4 px-[18px] border-[1px] border-solid border-blue100 rounded-[25px]'

interface TUiInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  errorMessage?: string
  inputBeforeContent?: ReactNode
  inputWrapperClassName?: string
}
const UiInput: FC<TUiInputProps> = ({
  className,
  label,
  errorMessage,
  inputBeforeContent,
  inputWrapperClassName,
  ...inpProps
}) => {
  return (
    <div className={cn([wrapperCls, className])}>
      {label && (
        <UiTypography font="Montserrat-R" tag="p" className={labelCls}>
          {label}
        </UiTypography>
      )}
      <div className={cn([inputWrapperCls, inputWrapperClassName])}>
        {inputBeforeContent}
        <input
          {...inpProps}
          className={cn([inputCls, className], {
            [inputErrorCls]: !!errorMessage,
          })}
        />
      </div>
      {errorMessage && (
        <UiTypography font="Montserrat-R" tag="p" className={errorCls}>
          {errorMessage}
        </UiTypography>
      )}
    </div>
  )
}

export { UiInput, type TUiInputProps }
