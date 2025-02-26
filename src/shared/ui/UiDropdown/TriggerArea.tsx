import { FC } from 'react'
import { TClassName, TState } from '@/shared/types'
import { TUiDropdownItem } from '..'
import { cn } from '@/shared/lib'
import { TTriggerAreaData } from './Main'
import { MarkArrowIcon } from '@/shared/icons'

const triggerAreaCls = 'flex items-center justify-between py-2 px-3 gap-x-2 cursor-pointer'
const iconCls = 'duration-150'
const iconExpandedCls = '-rotate-[180deg]'

interface Props extends TClassName, Omit<TTriggerAreaData, 'defaultActiveItemValue'> {
  activeItem: TUiDropdownItem | null
  setIsExpanded: TState<boolean>
  isExpanded: boolean
}
const TriggerArea: FC<Props> = ({
  activeItem,
  className,
  icon,
  placeholder = 'Выберите',
  isExpanded,
  setIsExpanded,
}) => {
  const handleExpand = () => {
    setIsExpanded((cur) => !cur)
  }

  return (
    <div className={cn([triggerAreaCls, className])} onClick={handleExpand}>
      {activeItem?.content || placeholder}{' '}
      {icon || <MarkArrowIcon className={cn([iconCls], { [iconExpandedCls]: isExpanded })} />}
    </div>
  )
}

export { TriggerArea }
