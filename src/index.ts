/**
 * @author Ian Sanders
 * @copyright 2019 Ian Sanders
 * @license MIT
 */

import express from "express";
import {queryAllCallees, queryMenu} from "./queries";
import cors from "cors";
import path from "path";

const app = express();

app.use(cors());

app.get("/api/all-callees", async (_, res) => {
  try {
    const result = await queryAllCallees();
    res.status(200).send(result);
  } catch (e) {
    res.status(500).send("An unknown error occurred on the server.");
    console.error(e);
  }
});

app.get("/api/menus/:menuID", async (req, res) => {
  try {
    const result = await queryMenu(req.params.menuID);
    if (result === null) {
      res.status(500).send("Could not find menu for callee.");
    } else {
      res.status(200).send(result);
    }
  } catch (e) {
    res.status(500).send("An unknown error occurred on the server.");
    console.error(e);
  }
});

app.use("/", express.static(path.join(__dirname, "..", "client", "build")));

app.listen(process.env.PORT, () => {
  console.log("Listening on port " + process.env.PORT);
});
