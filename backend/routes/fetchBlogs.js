const express = require("express");
const Notes = require("../models/Notes");
// const ID = require("./auth");

// const fetchId = async (id) => {
//   const notes = await Notes.find({ user: id });
//   console.log(notes);
// };

// module.exports = fetchId;

const fetchBlogs = async (res, req, id) => {
  console.log(id);

  const notes = (await Notes.find({})).slice(9);
  console.log(notes.length);

  req.json({ notes });

  console.log("Array ended");
};

module.exports = fetchBlogs;
