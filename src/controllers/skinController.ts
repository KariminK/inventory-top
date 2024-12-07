import { Request, RequestHandler } from "express";
import { quality, skin } from "../types";
import SkinModel from "../models/SkinModel";
import { body, validationResult } from "express-validator";

export const getIndex: RequestHandler = async (req, res) => {
  const data = await SkinModel.get();
  const skins = data.rows;
  res.render("index", { skins });
};

export const getNewSkin: RequestHandler = (req, res) => {
  res.render("newForm");
};

// post new skin
const postNewSkinReqHandler: RequestHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("newForm", { errors: errors.array() });
      return;
    }
    const skin: skin = req.body;
    await SkinModel.add(skin);
    res.redirect("/");
  } catch (error) {
    res.status(500).send("internal server error: " + error);
  }
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
const skinValidation = [
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
];
export const postNewSkin = [...skinValidation, postNewSkinReqHandler];

export const getEditSkin: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const data = await SkinModel.get(id);
  const skin = data.rows[0];
  res.render("editForm", { skin, id });
};
const putEditSkinReqHandler: RequestHandler = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("editForm", { errors: errors.array() });
      return;
    }
    const { id } = req.params;
    const skin = req.body;
    await SkinModel.update(+id, skin);
    res.redirect("/");
  } catch (error) {
    res.status(500).send("internal server error: " + error);
  }
};

export const putEditSkin = [...skinValidation, putEditSkinReqHandler];

// usuwanie skina

const deleteValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("skin name cannot be empty")
    .isString()
    .withMessage("skin name must be text"),
  body("password")
    .trim()
    .isEmpty()
    .withMessage("password shouldn't be empty")
    .custom((val) => {
      return val === "strongSkinPassword";
    })
    .withMessage("bad password"),
];

export const getDeleteSkin: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const data = await SkinModel.get(id);
  const skin = data.rows[0];
  res.render("deleteForm", { skin });
};

export const postDeleteSkin = [...skinValidation, putEditSkinReqHandler];
