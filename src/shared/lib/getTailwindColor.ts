import tailwindConfig from '../../../tailwind.config'

export const getTailwindColor = (
	color: keyof typeof tailwindConfig.theme.extend.colors
): string => {
	return tailwindConfig.theme.extend.colors[color]
}
