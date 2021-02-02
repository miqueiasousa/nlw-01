import joi from 'joi'

export default joi.object({
  name: joi
    .string()
    .max(255)
    .required(),
  email: joi
    .string()
    .pattern(/^([\w+_.-]+)@(\w+)(\.(\w){2,3})$$/)
    .max(255)
    .required(),
  password: joi
    .string()
    .max(255)
    .required()
})
