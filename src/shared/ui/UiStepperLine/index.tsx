import { FC } from 'react'
import { TClassName, TTag } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls = ''
const labelCls = 'text-darkBlue100'
const lineCls = 'w-full rounded-[30px] bg-grey100 h-4'
const activeLineCls = 'bg-blueBase rounded-[inherit] duration-150 h-full block'

type TUiStepperLineData = { steps: number; current: number }

interface TUiStepperLineProps extends TClassName, TUiStepperLineData {
  generateLabel?: (params: TUiStepperLineData) => string
  Tag?: TTag
  labelClassName?: string
  lineClassName?: string
  activeLineClassName?: string
}
const UiStepperLine: FC<TUiStepperLineProps> = ({
  current,
  steps,
  className,
  generateLabel,
  Tag = 'div',
  labelClassName,
  lineClassName,
  activeLineClassName,
}) => {
  return (
    <Tag className={cn([wrapperCls, className])}>
      <UiTypography font="Montserrat-R" tag="p" className={cn([labelCls, labelClassName])}>
        {generateLabel ? generateLabel({ current, steps }) : `Шаг ${current} из ${steps}`}
      </UiTypography>
      <div className={cn([lineCls, lineClassName])}>
        <span
          className={cn([activeLineCls, activeLineClassName])}
          style={{
            width: `${(100 / steps) * current}%`,
          }}
        />
      </div>
    </Tag>
  )
}

export { UiStepperLine, type TUiStepperLineProps, type TUiStepperLineData }
