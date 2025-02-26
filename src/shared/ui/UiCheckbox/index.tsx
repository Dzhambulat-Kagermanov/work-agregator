'use client'
import { FC, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'
import cls from './index.module.css'

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  inpCls?: string
}
const UiCheckbox: FC<Props> = ({ className, label, inpCls, ...other }) => {
  return (
    <label className={cn([cls.label, className])}>
      <input type="checkbox" className={cn([cls.inp, inpCls])} {...other} />
      {label && (
        <UiTypography tag="p" font="PlusJakartaSans-R" size={16}>
          {label}
        </UiTypography>
      )}
    </label>
  )
}

export { UiCheckbox }
