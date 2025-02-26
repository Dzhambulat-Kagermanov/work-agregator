'use client'
import { FC, FormEventHandler, MouseEventHandler, useCallback, useState } from 'react'
import { TClassName } from '@/shared/types'
import { UiButton, UiModal, UiStepperLine, UiTypography } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { SIGN_UP_MODAL } from '@/shared/constants'
import { CloseModalButton } from '@/features/CloseModalButton'
import { EmailContent } from './EmailContent'
import { PhoneContent } from './PhoneContent'
import Link from 'next/link'
import { FormTypeSwitcher } from './FormTypeSwitcher'
import { VerificationBlock } from './VerificationBlock'
import { UiCheckbox } from '@/shared/ui/UiCheckbox'
import { UserDataContent } from './UserDataContent'

const wrapperCls =
  'w-full zero:max-w-none xs-big:max-w-[470px] xs-big:rounded-[35px] bg-whiteBase p-4 zero:min-h-full xs-big:min-h-[auto]'
const formCls = ''
const titleCls = 'text-[32px] mt-[20px] mb-[35px]'
const closeBtnCls = 'sticky m-5 ml-auto'
const stepperLineCls = 'w-full max-w-[334px] mt-[30px]'
const messageInfoCls = 'text-xl my-[30px]'
const getMessageCls = 'mt-[30px] mb-[15px]'
const messageNotComeCls = 'text-blueBase text-center'
const issueSignInMessageCls = 'text-blueBase text-center'

const SLUG = SIGN_UP_MODAL

export enum EnFormType {
  phone = 'phone',
  email = 'email',
}
interface Props extends TClassName {}
const SignUpModal: FC<Props> = ({ className }) => {
  const [formType, setFormType] = useState<EnFormType>(EnFormType.phone)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)

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
        setCurrentStep(3)
      }
      if (currentStep === 3) {
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
        <CloseModalButton slug={SIGN_UP_MODAL} className={closeBtnCls} onClick={handleModalClose} />
        <UiTypography font="DrukWideCyr-B" tag="h2" className={titleCls}>
          Регистрация
        </UiTypography>
        {currentStep === 1 ? <FormTypeSwitcher setFormType={setFormType} /> : null}
        <UiStepperLine className={stepperLineCls} current={currentStep} steps={3} />
        {currentStep !== 3 && (
          <UiTypography font="PlusJakartaSans-R" tag="h2" className={messageInfoCls}>
            {descriptionMessage}
          </UiTypography>
        )}
        {currentStep === 1 ? (
          formType === EnFormType.email ? (
            <EmailContent />
          ) : (
            <PhoneContent />
          )
        ) : currentStep === 2 ? (
          <VerificationBlock />
        ) : (
          <UserDataContent className="mt-[18px]" />
        )}
        {currentStep === 1 ? (
          <>
            <UiCheckbox className="mt-[30px] mb-[10px]" label="Я даю согласие на обработку данных" disabled />
            <UiCheckbox className="mb-[30px]" label="Я соглашаюсь с  политикой сервиса" />
          </>
        ) : null}
        <UiButton wFull type="submit" theme="fill" className={getMessageCls}>
          <UiTypography font="PlusJakartaSans-R" tag="p">
            {currentStep === 1 ? 'Получить СМС' : currentStep === 2 ? 'Далее' : 'Войти'}
          </UiTypography>
        </UiButton>
        {currentStep === 1 ? (
          <Link href={'#'} className={issueSignInMessageCls}>
            <UiTypography tag="p" font={'PlusJakartaSans-B'}>
              Проблема при входе?
            </UiTypography>
          </Link>
        ) : currentStep === 2 ? (
          <Link href={'#'}>
            <UiTypography font="PlusJakartaSans-R" tag="p" className={messageNotComeCls}>
              Не приходит смс?
            </UiTypography>
          </Link>
        ) : null}
      </form>
    </UiModal>
  )
}

export { SignUpModal }
