import { Model, model, models, Schema } from "mongoose";
import { UserSchemaType } from "~/interface/userInterface";

const userSchema = new Schema<UserSchemaType>(
  {
    name: { type: String, required: true, minlength: 3 },
    email: { type: String, unique: true, required: true },
    phone: { type: String, default: "" },
    verifyEmail: { type: Boolean, default: false },
    verifyPhone: { type: Boolean, default: false },
    district: { type: String, default: "" },
    zip: { type: String, default: "" },
    address: { type: String, default: "" },
    countryCode: { type: String, default: "" },
  },
  { timestamps: true }
);

const userModel =
  (models.User as Model<UserSchemaType>) ||
  model<UserSchemaType>("User", userSchema);
export default userModel;
