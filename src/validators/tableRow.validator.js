import Joi from "joi";

import {regexp} from "../config";



const newTableRowValidator = Joi.object({
  companyName: Joi.string().required(),
  gameName: Joi.string().regex(regexp.GAME_NAME).required().messages({
    'gameName.pattern.base': 'Only letters. Min 1, max 20'
  }),
  totalPrice: Joi.number().min(1).max(10000).required(),
  currency: Joi.string().required(),
  confirm: Joi.boolean().required()
});

export {newTableRowValidator}
