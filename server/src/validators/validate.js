import { validationResult } from "express-validator";
import { httpError } from "../helpers/utility";

export const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ message: err.msg }));
  return httpError(res, extractedErrors);
};
