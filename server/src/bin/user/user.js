import User from "../../models/User.model";

export const userExist = async (payload) => {
  let { sub, email } = payload;
  let existingUser = await User.findOne({ email, google_id: sub });
  return existingUser;
};

export const adduser = async (data) => {
  let user = new User({
    google_id: data.sub,
    email: data.email,
    full_name: data.name,
    picture: data.picture,
    first_name: data.given_name,
    last_name: data.family_name,
  });
  user = await user.save();
  return user;
};
