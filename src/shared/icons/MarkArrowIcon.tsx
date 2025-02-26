import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends TIcon {}
const MarkArrowIcon: FC<Props> = ({ className, fill }) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      color={fill || 'black'}
    >
      <path
        d="M11.2579 0.729439C11.1028 0.582529 10.8925 0.5 10.6732 0.5C10.4539 0.5 10.2436 0.582529 10.0885 0.729439L5.99501 4.60846L1.90148 0.729439C1.74551 0.586693 1.53662 0.507706 1.31979 0.509492C1.10296 0.511277 0.895542 0.593692 0.742214 0.738985C0.588887 0.884278 0.501916 1.08083 0.500031 1.28629C0.498147 1.49176 0.581502 1.68971 0.732142 1.83751L5.41034 6.27056C5.56542 6.41747 5.77572 6.5 5.99501 6.5C6.21429 6.5 6.4246 6.41747 6.57968 6.27056L11.2579 1.83751C11.4129 1.69055 11.5 1.49127 11.5 1.28347C11.5 1.07568 11.4129 0.876394 11.2579 0.729439Z"
        fill={'currentColor'}
      />
    </svg>
  )
}

export { MarkArrowIcon }
