import { dbConnect, Posts } from "mongodb";

const handler = async (req, res) => {
  await dbConnect();
  const newPost = new Posts({
    userId: "12345uiolmnbvcserti",
    userName: "demonamexx",
    postName: "demopostxx",
    created_at: Date.now().toString(),
  });
  const result = await newPost.save();
  res.status(201).json(result);
};
export default handler;
