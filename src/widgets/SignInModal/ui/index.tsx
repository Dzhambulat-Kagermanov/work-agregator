import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { UiBlocksSwitcher, UiButton, UiInput, UiModal, UiStepperLine, UiTypography } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { SIGN_IN_MODAL } from '@/shared/constants'
import { CloseModalButton } from '@/features/CloseModalButton'
import { AuthFormFooter } from '@/widgets/AuthFormFooter'

const wrapperCls = 'w-full bg-whiteBase p-5 min-h-full'
const titleCls = 'text-[32px] mt-[30px] mb-[55px]'
const closeBtnCls = 'sticky m-5 ml-auto'
const blocksSwitcherCls = ''
const blocksSwitcherItemCls = 'flex items-center justify-center'
const blocksSwitcherItemTextCls = 'text-xl'
const stepperLineCls = 'w-full max-w-[334px] mt-[30px]'
const messageInfoCls = 'text-xl my-[30px]'
const getMessageCls = 'mt-[40px] mb-[15px]'

const SLUG = SIGN_IN_MODAL

interface Props extends TClassName {}
const SignInModal: FC<Props> = ({ className }) => {
  return (
    <UiModal slug={SLUG} contentClassName={cn([wrapperCls, className])} isYCenter isXCenter unmountDelay={150}>
      <CloseModalButton slug={SIGN_IN_MODAL} className={closeBtnCls} />
      <UiTypography font="DrukWideCyr-B" tag="h2" className={titleCls}>
        Вход
      </UiTypography>
      <UiBlocksSwitcher
        className={blocksSwitcherCls}
        defaultActiveItemValue="Телефон"
        itemClassName={blocksSwitcherItemCls}
        items={[
          {
            content: (
              <UiTypography font="PlusJakartaSans-R" tag="p" className={blocksSwitcherItemTextCls}>
                Телефон
              </UiTypography>
            ),
            value: 'Телефон',
            onSelect: () => {},
          },
          {
            content: (
              <UiTypography font="PlusJakartaSans-R" tag="p" className={blocksSwitcherItemTextCls}>
                Почта
              </UiTypography>
            ),
            value: 'Почта',
            onSelect: () => {},
          },
        ]}
      />
      <UiStepperLine className={stepperLineCls} current={1} steps={2} />
      <UiTypography font="PlusJakartaSans-R" tag="h2" className={messageInfoCls}>
        Мы отправим вам СМС код на вашу почту или телефон
      </UiTypography>
      <UiInput type="text" placeholder="example@mail.ru" className="w-full" />
      <UiButton wFull type="submit" theme="fill" className={getMessageCls}>
        <UiTypography font="PlusJakartaSans-R" tag="p">
          Получить СМС
        </UiTypography>
      </UiButton>
      <AuthFormFooter />
    </UiModal>
  )
}

export { SignInModal }
