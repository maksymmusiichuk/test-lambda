export interface VocabularyTypes {
    noun: string[];
    verb: string[];
    adjective: string[];
    adverb: string[];
    preposition: string[];
    conjunction: string[];
    pronoun: string[];
    interjection: string[];
    determiner: string[];
    numeral: string[];
}

export interface TypesFromTextResult {
    noun?: number;
    verb?: number;
    adjective?: number;
    adverb?: number;
    preposition?: number;
    conjunction?: number;
    pronoun?: number;
    interjection?: number;
    determiner?: number;
    numeral?: number;
}