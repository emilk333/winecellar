
export const debounce = (callback: Function, wait: number) => {
	let timeoutId: number | undefined = undefined
	return (...args: any) => {
		window.clearTimeout(timeoutId)
		timeoutId = window.setTimeout(() => {
			callback.apply(null, args)
		}, wait)
	}
}
