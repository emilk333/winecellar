import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    
    // Verify this is the data structure i want to use.. 
    // Verify if this model is possible for all types of wine
    // Consider things such as VDP, DOCG or other stuff
    const fakeJsonResponseSingleWine = [
        {
            type: "white",
            vintage: "2020",
            country: "germany",
            name: "Morstein GG",
            producer: "Wittmann",
            appelation: "Rheinhessen",
            price: {
                buyingPrice: "1300",
                estimatedCurrentValue: "1300"
            }
        },
        {
            type: "white",
            vintage: "2020",
            country: "france",
            name: "Montée de Tonerre 1. Cru",
            producer: "Raveneau",
            appelation: "Chablis",
            price: {
                buyingPrice: "3000",
                estimatedCurrentValue: "3000"
            }
        },
        {
            type: "white",
            vintage: "1994",
            country: "france",
            name: "Corton-Charlemagne Grand Cru",
            producer: "Bonneau du Martray",
            appelation: "Pernand-Vergelesses",
            price: {
                buyingPrice: "31000",
                estimatedCurrentValue: "32000"
            }
        },
        {
            type: "rose",
            vintage: "2021",
            country: "france",
            name: "Rosé",
            producer: "Tempier",
            appelation: "Bandol",
            price: {
                buyingPrice: "800",
                estimatedCurrentValue: "700"
            }
        },
        {
            type: "red",
            vintage: "2015",
            country: "france",
            name: "Musigny Grand Cru",
            producer: "Comte Georges de Vogüé",
            appelation: "Chambolle-Musigny",
            price: {
                buyingPrice: "61000",
                estimatedCurrentValue: "62000"
            }
        }
    ]

	return NextResponse.json(fakeJsonResponseSingleWine)
}