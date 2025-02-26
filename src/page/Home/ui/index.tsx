import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'

const pageCls = ''

interface Props extends TClassName {}
const HomePage: FC<Props> = ({ className }) => {
  return <main className={cn([pageCls, className])}></main>
}

export { HomePage }
