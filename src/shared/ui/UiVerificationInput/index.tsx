import { cn } from '@/shared/lib'
import { TClassName } from '@/shared/types'
import { FC } from 'react'
import VerificationInput, { VerificationInputProps } from 'react-verification-input'

const wrapperCls = 'flex w-auto  w-full'
const characterFilled = ''
const characterCls =
  'bg-transparent border-[1px] border-blueBase border-solid rounded-[8px] duration-150 text-blackBase flex-1 flex justify-center h-[65px] items-center max-w-[65px]'
const characterInactiveCls = 'border-grey100'
const characterSelectedCls = 'outline-none'

interface TUiVerificationInputProps extends Omit<VerificationInputProps, 'classNames'>, TClassName {}
const UiVerificationInput: FC<TUiVerificationInputProps> = ({
  placeholder = '',
  className,
  inputProps,
  ...inpProps
}) => {
  return (
    <VerificationInput
      inputProps={{
        autoComplete: 'one-time-code',
        inputMode: 'numeric',
        ...inputProps,
      }}
      classNames={{
        character: characterCls,
        characterFilled: characterFilled,
        characterInactive: characterInactiveCls,
        characterSelected: characterSelectedCls,
        container: cn([wrapperCls, className]),
      }}
      placeholder={placeholder}
      {...inpProps}
    />
  )
}

export { UiVerificationInput, type TUiVerificationInputProps }
