import { Wine } from "@/types/schema";

export const sortByWineProducer = (data: Wine[]) => {
    return data.sort((a:Wine, b:Wine) => {
		if (a.producer && b.producer) {
			return a.producer.localeCompare(b.producer, undefined, { numeric: true, sensitivity: 'base' });
		} else return 0 // If neither has a producer, they are considered equal
	})
}