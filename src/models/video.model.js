import mongoose, { Schema } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const VideoSchema = Schema(
  {
    videoFile: {
      type: String, //cloudinary url
      required: true,
    },

    thumbnail: {
      type: String, //cloudaniry url
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timeStamps: true,
  }
);

VideoSchema.plugin(mongoosePaginate);

export const Video = mongoose.model("Video", VideoSchema);
