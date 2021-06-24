import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

export const createToken = async (data) => {
  const payload = { data };
  try {
    const token = await jwt.sign(payload, SECRET /*EXPIRATION_TIME */);
    return token;
  } catch (error) {
    throw error;
  }
};

export const verifyToken = async (token) => {
  try {
    const decoded = await jwt.verify(token, SECRET);
    return decoded;
  } catch (error) {
    throw error;
  }
};
