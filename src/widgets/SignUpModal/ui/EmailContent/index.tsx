import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiInput } from '@/shared/ui'

const wrapperCls = 'w-full'

interface Props extends TClassName {}
const EmailContent: FC<Props> = ({ className }) => {
  return <UiInput type="text" placeholder="example@mail.ru" className={cn([wrapperCls, className])} />
}

export { EmailContent }
