import Joi from "joi";


const tableFilterValidator = Joi.object({
  companyName: Joi.string().required()
});

export {tableFilterValidator}