import { useEffect, useState, useRef, Ref } from "react"

/**
 * Custom hook to calculate the height of an element.
 * @param options - The options for the hook.
 * @returns An array with the height ref and the calculated height.
 */
export function useHeight<T extends HTMLElement>({ on }: { on: boolean }): [Ref<T>, number | undefined] {
	const [height, setHeight] = useState<number | undefined>(undefined)
	const heightRef = useRef<T>(null)

	useEffect(() => {
		if (heightRef.current && on) {
			setHeight(heightRef.current.scrollHeight)
		}
	}, [on])

	return [heightRef, height]
}
