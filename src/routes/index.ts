import { Router } from "express";
import {
  deleteSkin,
  getEditSkin,
  getIndex,
  getNewSkin,
  postNewSkin,
  putEditSkin,
} from "../controllers/skinController";

const indexRouter = Router();

// wyswietlanie strony glownej
indexRouter.get("/", getIndex);

// wyswietlanie formularza do dodawania skina
indexRouter.get("/new", getNewSkin);

// obsluga dodawania skina
indexRouter.post("/new", postNewSkin);

// wyswietlanie formularza do edytowania skina
indexRouter.get("/edit/:id", getEditSkin);

// obsluga edytowania skina
indexRouter.put("/edit", putEditSkin);

// obsluga usuwania skina
indexRouter.delete("/:id", deleteSkin);

export default indexRouter;
