import { FC, useState } from 'react'
import { TUiDropdownItem, UiDropdown } from '../UiDropdown'
import { TUiInputMaskProps, UiInputMask } from '../UiInputMask'
import { TInputMasks } from '@/shared/constants/input-masks'

interface TUiInputMaskSwitchProps extends TUiInputMaskProps {
  masks: TInputMasks
  items: TUiDropdownItem[]
}
const UiInputMaskSwitch: FC<TUiInputMaskSwitchProps> = ({ masks, onComplete, items, ...inpProps }) => {
  const masksKeys = Object.keys(masks)
  const [currentMaskKey, setCurrentMaskKey] = useState<string>(masksKeys[0])

  return (
    <UiInputMask
      mask={masks[currentMaskKey].mask}
      inputBeforeContent={
        <UiDropdown
          triggerArea={{
            defaultActiveItemValue: currentMaskKey,
          }}
          items={items.map(({ content, value, onSelect }) => {
            return {
              content,
              value,
              onSelect: () => {
                onSelect && onSelect()
                setCurrentMaskKey(value)
              },
            }
          })}
        />
      }
      {...inpProps}
    />
  )
}

export { UiInputMaskSwitch, type TUiInputMaskSwitchProps }
