"use strict";
const mongoose = require("mongoose");
const gameModel = require("../../mongodb/models/Game");

exports.insertGame = async (req, res) => {
  try {
    console.log("FILESS");
    console.log(req.body);

    // let {}

    const insertGame = await gameModel.create(data);
  } catch (error) {
    console.log("Insert game error", error);
  }
};
