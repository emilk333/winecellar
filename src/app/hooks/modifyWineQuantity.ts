import { Wine } from "@/types/schema"
import { useCallback, useState } from "react"

interface UseWineQuantityProps {
	changeWineQuantity: (id: number, quantity: number) => Promise<void>
	deleteWine: (id: number) => Promise<void>
}

export const useWineQuantity = ({
	changeWineQuantity,
	deleteWine,
}: UseWineQuantityProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const modifyWineQuantity = useCallback(
		async (wine: Wine, modificationType: "increase" | "decrease") => {
			setIsLoading(true)
			setError(null)

			try {
				const currentQuantity = wine.quantity!

				if (modificationType === "increase") {
					await increaseQuantity(currentQuantity, wine)
				}

				if (modificationType === "decrease") {
					await decreaseQuantity(currentQuantity, wine)
				}
			} catch (err) {
				setError(
					err instanceof Error ? err.message : "An error occurred"
				)
				throw err
			} finally {
                // The server serves stale data after revalidation? It only gets new data, after this is run.
                // Implement optimistic update and remove the timeout. 
				setTimeout(() => {
                    setIsLoading(false)
                }, 500)
			}
		},
		[changeWineQuantity, deleteWine]
	)

	const increaseQuantity = useCallback(
		async (currentQuantity: number, wine: Wine) => {
			const newQuantity = currentQuantity + 1
			await changeWineQuantity(wine.id, newQuantity)
		},
		[changeWineQuantity]
	)

	const decreaseQuantity = useCallback(
		async (currentQuantity: number, wine: Wine) => {
			const newQuantity = currentQuantity - 1

			if (newQuantity < 1) {
				await deleteWine(wine.id)
			} else {
				await changeWineQuantity(wine.id, newQuantity)
			}
		},
		[changeWineQuantity, deleteWine]
	)

	return {
		modifyWineQuantity,
		isLoading,
		error,
		clearError: () => setError(null),
	}
}
