import { cn } from '@/shared/lib'
import { TDynamicTagProps } from '@/shared/types'

const containerCls = 'w-full max-w-[1320px] px-[20px] mx-auto'

type TUiContainerProps = TDynamicTagProps
const UiContainer: TUiContainerProps = ({ tag: Tag, className, ...props }) => {
	//@ts-ignore
	return <Tag className={cn([containerCls, className])} {...props} />
}

export { UiContainer, type TUiContainerProps }
