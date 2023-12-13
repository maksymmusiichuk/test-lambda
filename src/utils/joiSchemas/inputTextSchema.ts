import * as Joi from 'joi';

export const inputTextSchema = Joi.object({
    inputText: Joi.string().required().min(1).max(1000)
})