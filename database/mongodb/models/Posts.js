import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const PostsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "user id isa invalid"],
  },
  userName: {
    type: String,
    required: [true, "user id isa invalid"],
  },
  postName: {
    type: String,
    required: [true, "user id isa invalid"],
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Posts || mongoose.model("Posts", PostsSchema);
