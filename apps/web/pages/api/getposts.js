import { dbConnect, Posts } from "mongodb";

const handler = async (req, res) => {
  await dbConnect();
  const result = await Posts.find({});
  res.status(200).json(result);
};
export default handler;
