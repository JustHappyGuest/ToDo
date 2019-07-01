const mongoose = require("../libs/mongoose");

const tasksSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    description: {
      type: String,
      required: "Описание должно быть не пустым!",
      minlength: [5, "Описание слишком короткое!"],
      maxlength: [50, "Описание слишком длинное!"],
      trim: true
    },
    deadline: {
      type: String,
      required: "Дата должен быть не пустым!"
    },
    state: { type: String, enum: ["active", "complete", "miss"], default: "active" }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", tasksSchema);
