import { inject, injectable } from 'inversify';
import { TOKENS } from 'Config/tokens';
import { MapperTypes } from "Services/mapperTypes";
import { vocabularyTypes } from 'Utils/vocabulary'
import { TypesFromTextResult } from 'Interfaces/grammarTypes';

@injectable()
export class DefineTypes {
    constructor(@inject(TOKENS.MAPPER_TYPES_SERVICE_TOKEN) private readonly mapperTypesService: MapperTypes) {}
    async defineTypes(inputText: string): Promise<TypesFromTextResult> {
        try {
            const definedTypes = await this.mapperTypesService.mapTextIntoTypes(inputText, vocabularyTypes);
            return definedTypes;
        } catch (err) {
            console.error(err);
        }
    }
}
