'use client'
import { TChildren } from '@/shared/types'
import { useRef, useEffect, useState, FC } from 'react'
import { createPortal } from 'react-dom'

interface Props extends TChildren {
	selector: string
}
const UiPortalWrapper: FC<Props> = ({ children, selector }) => {
	const ref = useRef<Element>(null)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		ref.current = document.querySelector(selector)
		setMounted(true)
	}, [selector])

	return mounted ? createPortal(children, ref.current as Element) : null
}

export { UiPortalWrapper }
