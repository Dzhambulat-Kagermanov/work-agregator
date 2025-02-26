import { RussianFlagIcon } from '@/shared/icons'
import { ReactNode } from 'react'

export type TInputMask = {
  mask: string
  prefix: ReactNode
  code: string
}
export type TInputMasks = Record<string, TInputMask>

export const phoneMasks: TInputMasks = {
  EN: {
    mask: '(000) 000-00 00',
    prefix: (
      <>
        <RussianFlagIcon /> +1
      </>
    ),
    code: '+1',
  },
  RU: {
    mask: '(000) 000-00 00',
    prefix: (
      <>
        <RussianFlagIcon /> +7
      </>
    ),
    code: '+7',
  },
  BE: {
    mask: '(000) 000-00 00',
    prefix: (
      <>
        <RussianFlagIcon /> +135
      </>
    ),
    code: '+135',
  },
}
