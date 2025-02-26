import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'

const wrapperCls = ''

interface Props extends TClassName {}
const FirstStep: FC<Props> = ({ className }) => {
  return <div className={cn([wrapperCls, className])}></div>
}

export { FirstStep }
