import { TClassName, TState } from '@/shared/types'
import { FC } from 'react'
import { TUiDropdownItem, TUiDropdownProps } from './Main'
import { cn } from '@/shared/lib'

const wrapperCls =
  'bg-grey100 rounded-[inherit] absolute left-0 bottom-0 translate-y-[calc(100%+5px)] min-w-full overflow-hidden rounded-[inherit]'
const itemCls = 'cursor-pointer hover:bg-grey100H duration-150 py-2 px-3'

interface Props extends TClassName, Pick<TUiDropdownProps, 'dropdownOpenType' | 'items'> {
  setActiveItem: TState<TUiDropdownItem | null>
  itemClassName?: string
  setIsExpanded: TState<boolean>
}
const ContentArea: FC<Props> = ({
  items,
  className,
  dropdownOpenType,
  setActiveItem,
  itemClassName,
  setIsExpanded,
}) => {
  return (
    <ul className={cn([wrapperCls, className])}>
      {items.map(({ content, onSelect, value }) => {
        return (
          <li
            key={value}
            className={cn([itemCls, itemClassName])}
            onClick={() => {
              onSelect && onSelect()
              setActiveItem({ content, onSelect, value })
              setIsExpanded(false)
            }}
          >
            {content}
          </li>
        )
      })}
    </ul>
  )
}

export { ContentArea }
