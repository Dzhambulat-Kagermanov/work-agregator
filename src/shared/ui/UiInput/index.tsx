import { cn } from '@/shared/lib'
import { FC, InputHTMLAttributes, ReactNode } from 'react'

const labelCls = 'flex gap-2 items-center text-sm'
const inputCls =
	'min-w-[50px] w-full flex-1 focus:outline-none font-ubuntu font-normal text-[inherit] text-blackBase bg-transparent placeholder:font-[inherit] placeholder:text-[inherit] placeholder:text-blackBase-50'

interface TUiInputProps extends InputHTMLAttributes<HTMLInputElement> {
	inputClassName?: string
	icon?: { place: 'before' | 'after'; content: ReactNode }
	theme: 'fill' | 'line'
}
const UiInput: FC<TUiInputProps> = ({
	theme,
	icon,
	className,
	inputClassName,
	...inpProps
}) => {
	let inputThemeCls: string

	if (theme === 'fill') {
		inputThemeCls = 'bg-grey100 py-1 px-2.5 rounded-md'
	} else {
		inputThemeCls =
			'border-b-[1px] border-b-solid border-b-blackBase-50 pb-1.5 px-0.5'
	}

	return (
		<label className={cn([labelCls, inputThemeCls, className])}>
			{icon && icon.place === 'after' && icon.content}
			<input {...inpProps} className={cn([inputCls, inputClassName])} />
			{icon && icon.place === 'before' && icon.content}
		</label>
	)
}

export { UiInput, type TUiInputProps }
