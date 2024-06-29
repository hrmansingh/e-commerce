import Joi from "joi";
import { Statuses } from "../../constant.js";

export const validationMiddleWare = (expectedSchema) => (req, res, next) => {
  const { error } = expectedSchema.validate(req.body);
  if (error) {
    res.status(Statuses.UNPROCESSABLE_ENTITY).send(error.details[0].message);
    return;
  } else {
    next();
  }
};

export const SignUpValidation = Joi.object().keys({
  name: Joi.string().min(3).required(),
  email: Joi.string().min(3).required().email(),
  password: Joi.string().required(),
});

export const LoginValidation = Joi.object().keys({
  email: Joi.string().min(3).required().email(),
  password: Joi.string().required(),
});
