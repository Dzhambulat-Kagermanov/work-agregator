'use client'
import { FC, FormEventHandler, MouseEventHandler, useCallback, useState } from 'react'
import { TClassName } from '@/shared/types'
import { UiButton, UiDropdown, UiModal, UiStepperLine, UiTypography } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { SIGN_IN_MODAL } from '@/shared/constants'
import { CloseModalButton } from '@/features/CloseModalButton'
import { AuthFormFooter } from '@/widgets/AuthFormFooter'
import { EmailContent } from './EmailContent'
import { PhoneContent } from './PhoneContent'
import Link from 'next/link'
import { FormTypeSwitcher } from './FormTypeSwitcher'
import { VerificationBlock } from './VerificationBlock'

const wrapperCls =
  'w-full zero:max-w-none xs-big:max-w-[470px] xs-big:rounded-[35px] bg-whiteBase p-4 zero:min-h-full xs-big:min-h-[auto]'
const formCls = ''
const titleCls = 'text-[32px]'
const closeBtnCls = 'sticky right-0 top-0'
const stepperLineCls = 'w-full max-w-[334px] mt-[30px]'
const messageInfoCls = 'text-xl my-[30px]'
const getMessageCls = 'mt-[30px] mb-[15px]'
const messageNotComeCls = 'text-blueBase text-center'
const headCls = 'flex justify-between items-center mt-[10px] mb-[35px]'

const SLUG = SIGN_IN_MODAL

export enum EnFormType {
  phone = 'phone',
  email = 'email',
}
interface Props extends TClassName {}
const SignInModal: FC<Props> = ({ className }) => {
  const [formType, setFormType] = useState<EnFormType>(EnFormType.phone)
  const [currentStep, setCurrentStep] = useState<1 | 2>(1)

  const handleModalClose: MouseEventHandler = () => {
    setTimeout(() => {
      setCurrentStep(1)
    }, 150)
  }
  const handleFormSubmit: FormEventHandler = useCallback(
    (event) => {
      event.preventDefault()
      if (currentStep !== 2) setCurrentStep(2)
      if (currentStep === 2) {
        alert('Отправка кода')
      }
    },
    [currentStep],
  )

  const descriptionMessage: string =
    currentStep === 1
      ? `Мы отправим вам СМС код на ${formType === EnFormType.email ? 'вашу почту' : 'вашу номер телефона'}`
      : `Код был отправлен на ${formType === EnFormType.email ? 'указанную почту' : 'указанный телефон'}`

  return (
    <UiModal
      onClose={handleModalClose}
      slug={SLUG}
      contentClassName={cn([wrapperCls, className])}
      isYCenter
      isXCenter
      unmountDelay={150}
    >
      <form className={formCls} onSubmit={handleFormSubmit}>
        <div className={headCls}>
          <UiTypography font="DrukWideCyr-B" tag="h2" className={titleCls}>
            Вход
          </UiTypography>
          <CloseModalButton slug={SIGN_IN_MODAL} className={closeBtnCls} onClick={handleModalClose} />
        </div>
        {currentStep === 1 ? <FormTypeSwitcher setFormType={setFormType} /> : null}
        <UiStepperLine className={stepperLineCls} current={currentStep} steps={2} />
        <UiTypography font="PlusJakartaSans-R" tag="h2" className={messageInfoCls}>
          {descriptionMessage}
        </UiTypography>
        {currentStep === 1 ? (
          formType === EnFormType.email ? (
            <EmailContent />
          ) : (
            <PhoneContent />
          )
        ) : (
          <VerificationBlock />
        )}
        <UiButton wFull type="submit" theme="fill" className={getMessageCls}>
          <UiTypography font="PlusJakartaSans-R" tag="p">
            {currentStep === 1 ? 'Получить СМС' : 'Подтвердить'}
          </UiTypography>
        </UiButton>
        {currentStep === 1 ? (
          <AuthFormFooter />
        ) : (
          <Link href={'#'}>
            <UiTypography font="PlusJakartaSans-R" tag="p" className={messageNotComeCls}>
              Не приходит смс?
            </UiTypography>
          </Link>
        )}
      </form>
    </UiModal>
  )
}

export { SignInModal }
