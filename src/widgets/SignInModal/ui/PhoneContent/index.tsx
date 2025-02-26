import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiInput } from '@/shared/ui'

const wrapperCls = 'w-full'

interface Props extends TClassName {}
const PhoneContent: FC<Props> = ({ className }) => {
  return <UiInput type="text" placeholder="8 (888) 888 88-88" className={cn([wrapperCls, className])} />
}

export { PhoneContent }
