var mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "姓名未填寫"],
    },
    SBP: {
      type: Number,
      required: [true, "收縮壓未填寫"],
    },
    DBP: {
      type: Number,
      required: [true, "舒張壓未填寫"],
    },
    heartBeat: {
      type: Number,
      required: [true, "心跳未填寫"],
    },
    createdAt:{
      type: Date,
      default: Date.now
    }
  },
  {
    versionKey: 0,
  }
);

const Post = mongoose.model("test", postSchema);
module.exports = Post;
