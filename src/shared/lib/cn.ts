import { twMerge } from 'tw-merge'

type TAdditional = (string | undefined)[]
type TMods = Record<string, boolean | undefined | null>

export const cn = (additional: TAdditional = [], mods: TMods = {}): string => {
	return twMerge(
		[
			...additional.filter(Boolean),
			...Object.entries(mods)
				.filter(([_, val]) => Boolean(val))
				.map(([key, _]) => key),
		].join(' ')
	)
}
