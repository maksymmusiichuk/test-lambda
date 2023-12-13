import { injectable } from 'inversify';
import {TypesFromTextResult, VocabularyTypes} from 'Interfaces/grammarTypes';

@injectable()
export class MapperTypes {
    async mapTextIntoTypes(inputText: string = '', vocabularyTypes: VocabularyTypes): Promise<TypesFromTextResult> {
        try {
            const words: string[] = inputText.toLowerCase().split(/\s+/);
            const countOfDefinedType: { [key: string]: number } = {};
            for (const word of words) {
                for (const type in vocabularyTypes) {
                    if (vocabularyTypes[type].includes(word)) {
                        countOfDefinedType[type] = (countOfDefinedType[type] || 0) + 1;
                        break;
                    }
                }
            }
            return countOfDefinedType;
        } catch (err) {
            console.error(err);
        }
    }
}
