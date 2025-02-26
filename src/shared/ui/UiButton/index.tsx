import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/shared/lib'

const wrapperCls = ''
const wrapperFillThemeCls =
  'rounded-[25px] bg-blueBase text-whiteBase hover:bg-blueBaseH active:bg-blueBaseA duration-150 py-4 px-6 text-2xl'

interface TUiButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'fill'
  wFull?: boolean
}
const UiButton: FC<TUiButtonProps> = ({ className, children, theme, wFull, ...btnProps }) => {
  const btnThemeCls = theme === 'fill' ? wrapperFillThemeCls : ''

  return (
    <button
      className={cn([wrapperCls, btnThemeCls, className], {
        ['w-full']: wFull,
      })}
      {...btnProps}
    >
      {children}
    </button>
  )
}

export { UiButton, type TUiButtonProps }
