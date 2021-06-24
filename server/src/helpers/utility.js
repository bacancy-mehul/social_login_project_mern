import bcrypt from "bcryptjs";

export const encrypt = async (data) => {
  const salt = await bcrypt.genSalt(10);
  const hashedData = await bcrypt.hash(data, salt);
  return hashedData;
};

export const decrypt = async (data, hashedData) => {
  const match = await bcrypt.compare(data, hashedData);
  return match;
};

// if (error.message)
//       return res.status(400).json({ errors: [{ message: error.message }] });
//     return res
//       .status(500)
//       .json({ errors: [{ message: "Internal Server Error" }] });

export const httpError = (res, error) => {
  let statusCode = 500;
  if (error || error.message) {
    statusCode = 400;
    let errorObject = {
      errors: error,
    };

    let errorMessage = {
      errors: [{ message: error.message }],
    };
    let errorData = Array.isArray(error) ? errorObject : errorMessage;
    return res.status(statusCode).json(errorData);
  }
  return res
    .status(statusCode)
    .json({ errors: [{ message: "Internal Server Error" }] });
};

export const httpResponse = (
  res,
  message,
  response,
  count,
  statusCode = 200
) => {
  let data = {
    message,
    response,
    count,
  };
  return res.status(statusCode).json({ data });
};
