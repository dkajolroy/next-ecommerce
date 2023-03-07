import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "~/config/db";
import userModel from "~/models/userModel";

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const user = await userModel.find();
    console.log(user);
    res.status(200).send(user);
  }
};

export default connectDB(addProduct);
