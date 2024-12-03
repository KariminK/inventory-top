import { RequestHandler } from "express";
import { quality, skin } from "../types";
import SkinModel from "../models/SkinModel";
import { body, validationResult } from "express-validator";

export const getIndex: RequestHandler = (req, res) => {
  res.render("index");
};

export const getNewSkin: RequestHandler = (req, res) => {
  res.render("newForm");
};

// post new skin
const postNewSkinReqHandler: RequestHandler = (req, res) => {
  const data = validationResult(req);
  console.log(data);
};

// validator
function isQuality(qual: string): qual is quality {
  return [
    "Battle-Scared",
    "Well-Worn",
    "Field-Tested",
    "Minimal Wear",
    "Factory New",
  ].includes(qual);
}

// TO DO: TEST THIS
export const postNewSkin = [
  body("weapon")
    .trim()
    .notEmpty()
    .withMessage("weapon name cannot be empty")
    .isString()
    .withMessage("weapon name must be text"),
  body("name")
    .trim()
    .notEmpty()
    .withMessage("skin name cannot be empty")
    .isString()
    .withMessage("skin name must be text"),
  body("quality")
    .trim()
    .notEmpty()
    .withMessage("skin quality cannot be empty")
    .custom(isQuality)
    .withMessage(
      "Skin Qualities are: Battle-Scared, Well-Worn, Field-Tested, Minimal Wear, Factory New"
    ),
  body("collection")
    .trim()
    .notEmpty()
    .withMessage("skin collection cannot be empty")
    .isString()
    .withMessage("skin collection must be text"),
  body("photo_url")
    .trim()
    .notEmpty()
    .withMessage("photo url cannot be empty")
    .isURL()
    .withMessage("photo link must be url"),
  postNewSkinReqHandler,
];

export const getEditSkin: RequestHandler = (req, res) => {};
export const putEditSkin: RequestHandler = (req, res) => {};

export const deleteSkin: RequestHandler = (req, res) => {};
