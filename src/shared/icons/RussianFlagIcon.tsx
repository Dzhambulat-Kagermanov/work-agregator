import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends Omit<TIcon, 'fill' | 'stroke'> {}
const RussianFlagIcon: FC<Props> = ({ className }) => {
  return (
    <svg
      width="31"
      height="31"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0.5 12.2188H30.5V18.7812H0.5V12.2188Z" fill="#117DD1" />
      <path
        d="M25.8125 5.1875H5.1875C2.08109 5.1875 0.5 7.49609 0.5 10.3438V12.2188H30.5V10.3438C30.5 7.49609 28.9189 5.1875 25.8125 5.1875Z"
        fill="white"
      />
      <path
        d="M0.5 20.6562C0.5 23.5039 2.08109 25.8125 5.1875 25.8125H25.8125C28.9189 25.8125 30.5 23.5039 30.5 20.6562V18.7812H0.5V20.6562Z"
        fill="#EC1C24"
      />
    </svg>
  )
}

export { RussianFlagIcon }
