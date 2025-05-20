import { NextRequest, NextResponse } from 'next/server'

/**
 * This endpoint is only for testing with static data. 
*/
export async function GET(req: NextRequest) {
    
    // TODO IMPLEMENT QUANTITY
    const fakeJsonResponseSingleWine = [
        {
            type: "port",
            uuid: 122,
            vintage: 2020,
            country: "france",
            name: "P2",
            producer: "Dom Perignon",
            appelation: "Champagne",
            price: {
                buyingPrice: 1300,
                estimatedCurrentValue: 1300
            }
        },
        {
            type: "sweet",
            uuid: 1227,
            vintage: 2020,
            country: "france",
            name: "P2",
            producer: "Dom Perignon",
            appelation: "Champagne",
            price: {
                buyingPrice: 1300,
                estimatedCurrentValue: 1300
            }
        },
        {
            type: "orange",
            uuid: 1228,
            vintage: 2020,
            country: "france",
            name: "P2",
            producer: "Dom Perignon",
            appelation: "Champagne",
            price: {
                buyingPrice: 1300,
                estimatedCurrentValue: 1300
            }
        },
        {
            type: "sparkling",
            uuid: 1229,
            vintage: 2020,
            country: "france",
            name: "P2",
            producer: "Dom Perignon",
            appelation: "Champagne",
            price: {
                buyingPrice: 1300,
                estimatedCurrentValue: 1300
            }
        },
        {
            type: "white",
            uuid: 1231,
            vintage: 2020,
            country: "germany",
            name: "Morstein GG",
            producer: "Wittmann",
            appelation: "Rheinhessen",
            price: {
                buyingPrice: 1300,
                estimatedCurrentValue: 1300
            }
        },
        {
            type: "white",
            uuid: 1232,
            vintage: 2007,
            country: "germany",
            name: "Gaisböhl GC",
            producer: "Dr. Burklin Wolf",
            appelation: "Phalz",
            price: {
                buyingPrice: 600,
                estimatedCurrentValue: 700
            }
        },
        {
            type: "white",
            uuid: 1233,
            vintage: 2020,
            country: "germany",
            name: "Morstein GG",
            producer: "Wittmann",
            appelation: "Rheinhessen",
            price: {
                buyingPrice: 1300,
                estimatedCurrentValue: 1300
            }
        },
        {
            type: "white",
            uuid: 1234,
            vintage: 2020,
            country: "france",
            name: "Montée de Tonerre 1. Cru",
            producer: "Raveneau",
            appelation: "Chablis",
            price: {
                buyingPrice: 3000,
                estimatedCurrentValue: 3000
            }
        },
        {
            type: "white",
            uuid: 1235,
            vintage: 1994,
            country: "france",
            name: "Corton-Charlemagne Grand Cru",
            producer: "Bonneau du Martray",
            appelation: "Pernand-Vergelesses",
            price: {
                buyingPrice: 31000,
                estimatedCurrentValue: 32000
            }
        },
        {
            type: "rose",
            uuid: 1236,
            vintage: 2021,
            country: "france",
            name: "Rosé",
            producer: "Tempier",
            appelation: "Bandol",
            price: {
                buyingPrice: 800,
                estimatedCurrentValue: 700
            }
        },
        {
            type: "red",
            uuid: 1237,
            vintage: 2015,
            country: "france",
            name: "Musigny Grand Cru",
            producer: "Comte Georges de Vogüé",
            appelation: "Chambolle-Musigny",
            price: {
                buyingPrice: 61000,
                estimatedCurrentValue: 62000
            }
        }
    ]

	return NextResponse.json(fakeJsonResponseSingleWine)
}