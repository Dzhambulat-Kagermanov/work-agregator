import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends Omit<TIcon, 'stroke'> {}
const CloseIcon: FC<Props> = ({ className, fill }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="" className={className}>
      <g clip-path="url(#clip0_2001_134)">
        <path
          d="M22.1562 1.84375L1.84375 22.1562M1.84375 1.84375L22.1562 22.1562"
          stroke={fill || 'black'}
          stroke-width="2.8125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2001_134">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { CloseIcon }
