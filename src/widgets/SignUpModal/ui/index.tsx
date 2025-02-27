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
const titleCls = 'text-[32px]'
const closeBtnCls = 'sticky'
const stepperLineCls = 'w-full max-w-[334px] mt-[30px]'
const messageInfoCls = 'text-xl my-[30px]'
const getMessageCls = 'mt-[30px] mb-[15px]'
const messageNotComeCls = 'text-blueBase text-center'
const issueSignInMessageCls = 'text-blueBase text-center'
const headCls = 'flex justify-between items-center mt-[10px] mb-[35px]'

const SLUG = SIGN_UP_MODAL

export enum EnFormType {
  phone = 'phone',
  email = 'email',
}
interface Props extends TClassName {}
const SignUpModal: FC<Props> = ({ className }) => {
  const [formType, setFormType] = useState<EnFormType>(EnFormType.phone)
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1)
  const [confirmDataProcessingVal, setConfirmDataProcessingVal] = useState<boolean>(false)
  const [confidentialityPolicyVal, setConfidentialityPolicyVal] = useState<boolean>(false)

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
      ? `Мы отправим вам код на ${formType === EnFormType.email ? 'вашу почту' : 'ваш номер телефона'}`
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
            Регистрация
          </UiTypography>
          <CloseModalButton slug={SIGN_UP_MODAL} className={closeBtnCls} onClick={handleModalClose} />
        </div>
        {currentStep === 1 ? <FormTypeSwitcher setFormType={setFormType} /> : null}
        <UiStepperLine className={stepperLineCls} current={currentStep} steps={3} />
        {currentStep !== 3 && (
          <UiTypography font="Montserrat-R" tag="h2" className={messageInfoCls}>
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
            <UiCheckbox
              defaultChecked={confirmDataProcessingVal}
              onChange={() => {
                setConfirmDataProcessingVal((cur) => !cur)
              }}
              className="mt-[30px] mb-[10px]"
              label="Я даю согласие на обработку данных"
            />
            <UiCheckbox
              defaultChecked={confidentialityPolicyVal}
              onChange={() => {
                setConfidentialityPolicyVal((cur) => !cur)
              }}
              className="mb-[30px]"
              label="Я соглашаюсь с  политикой сервиса"
            />
          </>
        ) : null}
        <UiButton
          disabled={!confirmDataProcessingVal || !confidentialityPolicyVal}
          wFull
          type="submit"
          theme="fill"
          className={getMessageCls}
        >
          <UiTypography font="Montserrat-R" tag="p">
            {currentStep === 1 ? 'Получить СМС' : currentStep === 2 ? 'Далее' : 'Войти'}
          </UiTypography>
        </UiButton>
        {currentStep === 1 ? (
          <Link href={'#'} className={issueSignInMessageCls}>
            <UiTypography tag="p" font={'Montserrat-B'}>
              Проблема при входе?
            </UiTypography>
          </Link>
        ) : currentStep === 2 ? (
          <Link href={'#'}>
            <UiTypography font="Montserrat-R" tag="p" className={messageNotComeCls}>
              Не приходит код?
            </UiTypography>
          </Link>
        ) : null}
      </form>
    </UiModal>
  )
}

export { SignUpModal }
