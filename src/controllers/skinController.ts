import { RequestHandler } from "express";
import { skin } from "../types";

export const getIndex: RequestHandler = (req, res) => {
  res.render("index");
};

export const getNewSkin: RequestHandler = (req, res) => {};

export const postNewSkin: RequestHandler = (req, res) => {};

export const getEditSkin: RequestHandler = (req, res) => {};
export const putEditSkin: RequestHandler = (req, res) => {};

export const deleteSkin: RequestHandler = (req, res) => {};
