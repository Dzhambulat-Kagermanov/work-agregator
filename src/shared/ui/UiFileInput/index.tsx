import { cn } from '@/shared/lib'
import { FC, InputHTMLAttributes, ReactNode } from 'react'
import { UiTypography } from '../UiTypography'
import { ClipIcon } from '@/shared/icons'

const wrapperCls = ''
const labelCls = 'text-darkBlue100'
const inputCls = 'hidden'
const inputErrorCls = 'border-redBase'
const errorCls = 'text-redBase'
const inputWrapperCls =
  'flex justify-between items-center gap-x-2 py-4 px-[18px] border-[1px] border-dashed border-blue100 rounded-[25px] cursor-pointer'
const placeholderCls = 'text-lg text-greyBase'

interface TUiFileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  errorMessage?: string
  inputBeforeContent?: ReactNode
  inputWrapperClassName?: string
}
const UiFileInput: FC<TUiFileInputProps> = ({
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
      <label className={cn([inputWrapperCls, inputWrapperClassName])}>
        <input
          type="file"
          {...inpProps}
          className={cn([inputCls, className], {
            [inputErrorCls]: !!errorMessage,
          })}
        />
        <UiTypography font="Montserrat-R" tag="p" className={placeholderCls}>
          Выбрать файл
        </UiTypography>
        <ClipIcon />
      </label>
      {errorMessage && (
        <UiTypography font="Montserrat-R" tag="p" className={errorCls}>
          {errorMessage}
        </UiTypography>
      )}
    </div>
  )
}

export { UiFileInput, type TUiFileInputProps }
