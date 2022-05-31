const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    thumbnail_id: {
      type: String,
    },
    thumbnail_name: {
      type: String,
    },
  },
  status: {
    type: Boolean,
    required: true,
  },
  short_description: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  game_url: {
    type: String,
  },
  genre: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  developer: {
    type: String,
    required: true,
  },
  release_date: {
    type: Date,
    required: true,
  },
  minimum_system_requirements: {
    os: {
      type: String,
      required: true,
    },
    processor: {
      type: String,
      required: true,
    },
    memory: {
      type: String,
      required: true,
    },
    graphics: {
      type: String,
      required: true,
    },
    storage: {
      type: String,
      required: true,
    },
  },
  screenshots: [
    {
      screenshot_id: {
        type: String,
      },
      screenshot_name: {
        type: String,
      },
    },
  ],
});

const GameModel = mongoose.model("Game", gameSchema);

module.exports = GameModel;
