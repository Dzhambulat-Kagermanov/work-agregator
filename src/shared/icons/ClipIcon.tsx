import { FC } from 'react'
import { TIcon } from '../types'

interface Props extends TIcon {}
const ClipIcon: FC<Props> = ({ className, fill }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} color={fill || '#A19A9A'}>
      <g clip-path="url(#clip0_105_8707)">
        <path
          d="M8.66302 13.825L14.2693 8.21871C14.6721 7.82702 15.2129 7.60962 15.7747 7.61354C16.3365 7.61746 16.8742 7.84238 17.2715 8.23965C17.6687 8.63692 17.8937 9.17461 17.8976 9.73643C17.9015 10.2982 17.6841 10.839 17.2924 11.2418L8.22271 20.3133C7.42082 21.1153 6.3332 21.5658 5.19911 21.5659C4.06502 21.5659 2.97736 21.1155 2.17541 20.3136C1.37345 19.5117 0.922895 18.424 0.922852 17.29C0.922808 16.1559 1.37328 15.0682 2.17517 14.2663L12.1278 4.31364C14.6326 1.80887 18.6936 1.80887 21.1984 4.31364C23.7032 6.81841 23.7032 10.8795 21.1984 13.3838L14.7106 19.8721"
          stroke={'currentColor'}
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_105_8707">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export { ClipIcon }
