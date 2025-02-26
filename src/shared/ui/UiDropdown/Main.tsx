import { FC, ReactNode, useEffect, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { TriggerArea } from './TriggerArea'
import { ContentArea } from './ContentArea'

const wrapperCls = 'bg-grey100 rounded-[25px] relative'
const triggerAreaCls = ''
const contentAreaCls = ''

type TUiDropdownItem = {
  content: ReactNode
  value: string
  onSelect?: VoidFunction
}
export type TTriggerAreaData = {
  placeholder?: string
  icon?: ReactNode
  defaultActiveItemValue?: TUiDropdownItem['value']
}
interface TUiDropdownProps extends TClassName {
  triggerArea?: TTriggerAreaData
  contentArea?: TUiDropdownItem[]
  dropdownOpenType?: 'inline' | 'overline'
  disabled?: boolean
  transition?: {
    speedMs: number
    property?: string
  }
  onChange?: (activeItem: TUiDropdownItem | null) => void
  classNames?: {
    triggerArea?: {
      container?: string
    }
    contentArea?: {
      container?: string
      itemClassName?: string
    }
  }
  items: TUiDropdownItem[]
  isExpand?: boolean
}
const UiDropdown: FC<TUiDropdownProps> = ({
  className,
  classNames,
  contentArea,
  disabled,
  dropdownOpenType,
  transition,
  triggerArea,
  items = [],
  isExpand,
  onChange,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false)
  const [activeItem, setActiveItem] = useState<TUiDropdownItem | null>(
    triggerArea?.defaultActiveItemValue
      ? items.find(({ value }) => value === triggerArea.defaultActiveItemValue) || null
      : null,
  )

  useEffect(() => {
    isExpand !== undefined && setIsExpanded(isExpand)
  }, [isExpand])

  useEffect(() => {
    onChange && onChange(activeItem)
  }, [activeItem])

  return (
    <div className={cn([wrapperCls, className])}>
      <TriggerArea
        setIsExpanded={setIsExpanded}
        isExpanded={isExpanded}
        activeItem={activeItem}
        className={cn([triggerAreaCls, classNames?.triggerArea?.container])}
        {...triggerArea}
      />
      {isExpanded && (
        <ContentArea
          setIsExpanded={setIsExpanded}
          itemClassName={classNames?.contentArea?.itemClassName}
          className={cn([contentAreaCls, classNames?.contentArea?.container])}
          items={activeItem ? items.filter(({ value }) => value !== activeItem.value) : items}
          setActiveItem={setActiveItem}
        />
      )}
    </div>
  )
}

export { UiDropdown, type TUiDropdownProps, type TUiDropdownItem }
