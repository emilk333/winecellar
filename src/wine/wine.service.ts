import { Injectable } from '@nestjs/common';
import { randomUUID, UUID } from 'crypto';
import { CreateWineDTO } from './dto/create-wine.dto';

@Injectable()
export class WineService {
    private wineData = [
        {
            id: "85ab1101-35e6-47cf-b144-8a6429793b95",
            name: "name1",
            description: "bla bla 1"
        },
        {
            id: "d5382665-9aad-4dd6-a7a4-b58d906bdbd2",
            name: "name2",
            description: "bla bla 2"
        }
    ]

    allWine() {
        return this.wineData
    }

    singleWine(id: UUID) {
        const wine = this.wineData.find(wine => wine.id === id)
        if (!wine) throw new Error(`Wine with id ${id} was not found`)
        return wine
    }

    create(createWineDTO: CreateWineDTO) {
        const newData = {
            id: randomUUID(),
            ...createWineDTO
        }
        this.wineData.push(newData)
        return this.wineData
    }

    remove(id: UUID) {
        const index = this.wineData.findIndex(wine => wine.id === id)

        if (index === -1) {
            throw new Error(`Could not delete wine with id ${id}`)
        }

        return this.wineData.splice(index, 1)
    }
}
