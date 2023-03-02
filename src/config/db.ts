import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

interface Handler {
  (req: NextApiRequest, res: NextApiResponse): Promise<any>;
}

const connectDB =
  (handler: Handler) => async (req: NextApiRequest, res: NextApiResponse) => {
    if (mongoose.connection.readyState) {
      return handler(req, res);
    }

    const dbUri = String(process.env.MONGO_URI);
    await mongoose.connect(dbUri);
    return handler(req, res);
  };
export default connectDB;
