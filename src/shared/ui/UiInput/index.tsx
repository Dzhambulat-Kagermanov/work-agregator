import { cn } from '@/shared/lib'
import { FC, InputHTMLAttributes, ReactNode } from 'react'

const inputCls =
  'font-plusJakarta text-lg placeholder:text-lg placeholder:text-greyBase py-5 px-[10px] border-[1px] border-solid border-blue100 rounded-[25px]'

interface TUiInputProps extends InputHTMLAttributes<HTMLInputElement> {}
const UiInput: FC<TUiInputProps> = ({ className, ...inpProps }) => {
  return <input {...inpProps} className={cn([inputCls, className])} />
}

export { UiInput, type TUiInputProps }
