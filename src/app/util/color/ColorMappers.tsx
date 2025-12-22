import { WineType } from "@/types/schema";

const getPseudoBgColorByTypeBefore = (type: WineType) => {
	switch(type) { 
		case WineType.Champagne: { 
			return "before:bg-gradient-yellow-green-tint"; 
		} 
		case WineType.Sparkling: { 
			return "before:bg-gradient-paper"; 
		} 
		case WineType.White: { 
			return "before:bg-gradient-piss-yellow"; 
		} 
		case WineType.Red: { 
			return "before:bg-gradient-off-red"; 
		} 
		case WineType.Rosé: { 
			return "before:bg-gradient-rosé"; 
		} 
		case WineType.Orange: { 
			return "before:bg-gradient-orange"; 
		} 
		case WineType.Sweet: { 
			return "before:bg-gradient-off-yellow"; 
		} 
		case WineType.Port: { 
			return "before:bg-gradient-port"; 
		} 
		default: { 
			return "before:bg-gradient-paper"; 
		} 
	} 
}

const getPseudoBgColorByTypeAfter = (type: WineType) => {
	switch(type) { 
		case WineType.Champagne: { 
			return "after:bg-gradient-yellow-green-tint"; 
		} 
		case WineType.Sparkling: { 
			return "after:bg-gradient-paper"; 
		} 
		case WineType.White: { 
			return "after:bg-gradient-piss-yellow"; 
		} 
		case WineType.Red: { 
			return "after:bg-gradient-off-red"; 
		} 
		case WineType.Rosé: { 
			return "after:bg-gradient-rosé"; 
		} 
		case WineType.Orange: { 
			return "after:bg-gradient-orange"; 
		} 
		case WineType.Sweet: { 
			return "after:bg-gradient-off-yellow"; 
		} 
		case WineType.Port: { 
			return "after:bg-gradient-port"; 
		} 
		default: { 
			return "after:bg-gradient-paper"; 
		} 
	} 
}

const getBgColorByType = (type: WineType) => {
	switch(type) { 
		case WineType.Champagne: { 
			return "bg-yellow-green-tint-400"; 
		} 
		case WineType.Sparkling: { 
			return "bg-paper-800"; 
		} 
		case WineType.White: { 
			return "bg-piss-yellow-400"; 
		} 
		case WineType.Red: { 
			return "bg-off-red-400"; 
		} 
		case WineType.Rosé: { 
			return "bg-rosé-400"; 
		} 
		case WineType.Orange: { 
			return "bg-orange-400"; 
		} 
		case WineType.Sweet: { 
			return "bg-off-yellow-400"; 
		} 
		case WineType.Port: { 
			return "bg-port-800"; 
		} 
		default: { 
			return "bg-paper-800"; 
		} 
	} 
}

const getTextAccentColorByType = (type: WineType) => {
	switch(type) { 
		case WineType.Champagne: { 
			return "text-yellow-green-tint-800"; 
		} 
		case WineType.Sparkling: { 
			return "text-paper-900"; 
		} 
		case WineType.White: { 
			return "text-piss-yellow-800"; 
		} 
		case WineType.Red: { 
			return "text-off-red-100"; 
		} 
		case WineType.Rosé: { 
			return "text-rosé-800"; 
		} 
		case WineType.Orange: { 
			return "text-orange-800"; 
		} 
		case WineType.Sweet: { 
			return "text-off-yellow-800"; 
		} 
		case WineType.Port: { 
			return "text-port-400"; 
		} 
		default: { 
			return "text-paper-800"; 
		} 
	} 
}

export { 
	getBgColorByType,
	getTextAccentColorByType,
	getPseudoBgColorByTypeAfter,
	getPseudoBgColorByTypeBefore
}