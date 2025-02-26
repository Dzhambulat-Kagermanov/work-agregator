'use client'
import { FC, ReactNode, useMemo, useState } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'

const wrapperCls = 'border-greyBase border-[1px] border-solid rounded-[30px] relative flex overflow-hidden min-h-[65px]'
const itemCls = 'relative flex-1 text-darkBlueBase duration-100 transition-colors cursor-pointer'
const itemActiveCls = 'text-whiteBase rounded-[27px] cursor-default'
const activeMarkerCls = 'bg-blueBase absolute top-0 bottom-0 rounded-[inherit]  duration-500'

type TUiBlocksSwitcherItem = { content: ReactNode; onSelect?: () => void; value: string }

interface TUiBlocksSwitcherProps extends TClassName {
  items: TUiBlocksSwitcherItem[]
  defaultActiveItemValue?: string
  itemClassName?: string
  onChange?: (value: string) => void
}
const UiBlocksSwitcher: FC<TUiBlocksSwitcherProps> = ({
  className,
  items,
  defaultActiveItemValue,
  itemClassName,
  onChange,
}) => {
  const [activeItem, setActiveItem] = useState<TUiBlocksSwitcherItem>(
    defaultActiveItemValue ? items.find((props) => props.value === defaultActiveItemValue) || items[0] : items[0],
  )
  let activeItemIndex = useMemo(() => {
    let index: number = 0
    items.find(({ value }, idx) => {
      if (activeItem.value === value) {
        index = idx
        return true
      }
    })
    return index
  }, [activeItem])

  return (
    <div className={cn([wrapperCls, className])}>
      <div
        className={activeMarkerCls}
        style={{
          left: `${(100 / items.length) * activeItemIndex}%`,
          right: `${(100 / items.length) * (items.length - 1 - activeItemIndex)}%`,
        }}
      />
      {items.map(({ content, onSelect, value }) => {
        return (
          <div
            key={value}
            onClick={() => {
              onSelect && onSelect()
              onChange && onChange(value)
              setActiveItem({ content, onSelect, value })
            }}
            className={cn([itemCls, itemClassName], {
              [itemActiveCls]: value === activeItem.value,
            })}
          >
            {content}
          </div>
        )
      })}
    </div>
  )
}

export { UiBlocksSwitcher, type TUiBlocksSwitcherProps, type TUiBlocksSwitcherItem }
