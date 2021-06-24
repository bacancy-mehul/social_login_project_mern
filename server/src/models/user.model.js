import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    full_name: String,
    status: {
      type: Number,
      default: 1,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    email: {
      type: String,
      unique: true,
    },
    google_id: String,
    picture: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);

var User = mongoose.model("User", userSchema);

export default User;

// google_id: sub,
// email: email,
// email_verified,
// full_name: name,
// picture,
// first_name: given_name,
// last_name: family_name,
