import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { UiInput } from '@/shared/ui'

const wrapperCls = 'flex flex-col gap-y-[25px]'

interface Props extends TClassName {}
const UserDataContent: FC<Props> = ({ className }) => {
  return (
    <div className={cn([wrapperCls, className])}>
      <UiInput placeholder="Иван" label="*Имя" errorMessage="Ошибка" />
      <UiInput placeholder="Иванов" label="Фамилия" errorMessage="Ошибка" />
      <UiInput placeholder="Выбрать файл" label="Аватар" type="file" />
    </div>
  )
}

export { UserDataContent }
