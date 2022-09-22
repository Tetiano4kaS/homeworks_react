import Joi from "joi";

const carValidator = Joi.object({
    model:Joi.string().regex(/^[a-zA-ZА-я]{2,20}$/).required().messages({'string.pattern.base':'Тільки букви мін 2 симв, макс 20 симв.'}),
    price:Joi.number().min(0).max(100000000).required(),
    year:Joi.number().min(1990).max(new Date().getFullYear()).required()
});
export {carValidator}