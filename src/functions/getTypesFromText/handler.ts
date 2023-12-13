import { formatJSONResponse } from 'Libs/api-gateway';
import { joiValidation } from 'Middlewares/joi-middleware';
import middy from '@middy/core';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import container from 'Config/container';
import { TOKENS } from 'Config/tokens';

import { DefineTypes } from 'Services/defineTypes';
import { inputTextSchema } from 'Utils/joiSchemas/inputTextSchema';
import { TypesFromTextResult } from 'Interfaces/grammarTypes';

const getTypesFromText = async (event) => {
    const inputText: string = event.body?.inputText || '';
    const typesFromText: TypesFromTextResult = await container
      .get<DefineTypes>(TOKENS.DEFINE_TYPES_SERVICE_TOKEN)
      .defineTypes(inputText);

    return formatJSONResponse({
        message: `There are provided types that exists in the input text:`,
        typesFromText,
    });
};

export const main = middy(getTypesFromText)
    .use(httpJsonBodyParser())
    .use(
        joiValidation({
          schema: inputTextSchema
        })
    );
