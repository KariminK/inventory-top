import { Router } from "express";
import {
  getDeleteSkin,
  getEditSkin,
  getIndex,
  getNewSkin,
  postDeleteSkin,
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
indexRouter.post("/edit/:id", putEditSkin);

// wyswietlanie formularza do usuwania skina
indexRouter.get("/delete/:id", getDeleteSkin);

// obsluga usuwania skina
indexRouter.post("/delete/:id", postDeleteSkin);

export default indexRouter;
