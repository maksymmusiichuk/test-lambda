import middy from '@middy/core';
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { formatJSONResponse } from 'Libs/api-gateway';

export const joiValidation = ({
  schema,
  source = 'body'
}): middy.MiddlewareObj<APIGatewayProxyEvent, APIGatewayProxyResult> => {
    const before: middy.MiddlewareFn<APIGatewayProxyEvent, APIGatewayProxyResult> = (request): void => {
        const { error } = schema.validate(request.event[source], { abortEarly: false });
        if (error) {
            const errorMessage = error.details.reduce((acc, currentValue) => acc + currentValue.message, '');

            request.response = formatJSONResponse(
                {
                    message: errorMessage
                },
                400
            );
        }
    };

    return {
        before
    };
};
