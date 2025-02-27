'use client'
import { cn } from '@/shared/lib'
import { ChangeEventHandler, FC, InputHTMLAttributes, MouseEventHandler, ReactNode, useState } from 'react'
import { UiTypography } from '../UiTypography'
import { ClipIcon, CloseIcon } from '@/shared/icons'

const wrapperCls = ''
const labelCls = 'text-darkBlue100'
const inputCls = 'hidden'
const inputErrorCls = 'border-redBase'
const errorCls = 'text-redBase'
const inputWrapperCls =
  'flex justify-between items-center gap-x-2 py-4 px-[18px] border-[1px] border-dashed border-blue100 rounded-[25px] cursor-pointer'
const placeholderCls = 'text-lg text-greyBase'
const fileNameCls = 'text-lg max-w-[85%] truncate'

interface TUiFileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'multiply'> {
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
  onChange,
  ...inpProps
}) => {
  const [selectedFiles, setSelectedFiles] = useState<File>()

  const handleRemoveFile: MouseEventHandler = (event) => {
    setSelectedFiles(undefined)
  }
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.target.files
    if (files?.length) {
      setSelectedFiles(files[0])
    }
  }

  return (
    <div className={cn([wrapperCls, className])}>
      {label && (
        <UiTypography font="Montserrat-R" tag="p" className={labelCls}>
          {label}
        </UiTypography>
      )}
      <label className={cn([inputWrapperCls, inputWrapperClassName])}>
        <input
          onChange={handleChange}
          type="file"
          {...inpProps}
          className={cn([inputCls, className], {
            [inputErrorCls]: !!errorMessage,
          })}
        />
        <UiTypography font="Montserrat-R" tag="p" className={selectedFiles ? fileNameCls : placeholderCls}>
          {selectedFiles?.name || 'Выбрать файл'}
        </UiTypography>
        {selectedFiles !== undefined ? (
          <button type="button" onClick={handleRemoveFile}>
            <CloseIcon />
          </button>
        ) : (
          <ClipIcon />
        )}
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
