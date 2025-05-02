import { Router } from "express";
import {
  addUser,
  selectAllUser,
  selectUser
} from "../utils/authentification.utils.mjs";

const route = Router();
route.get("/data", async (req, res) => {
  const { data, erreur } = await selectAllUser();
  if (erreur) {
    res.status(404).send(erreur);
  } else {
    res.status(201).send(data);
  }
});

route.post("/adduser", async (req, res) => {
  const { erreur, data } = await addUser(req.body);
  if (erreur) {
    res.status(201).send({ erreur: erreur });
  } else {
    res.status(201).send({ message: "user creee", data: data });
  }
});

route.post("/selectuser", async (req, res) => {
  const { data, erreur } = await selectUser(req.body);
  if (erreur) {
    res.status(201).send({ erreur: erreur });
  } else {
    res.status(201).send({ data: data });
  }
});

// route.post("/addimage", upload.single("file"), async (req, res) => {
//   try {
//     if (req.file && req.body.id) {
//       const { data, erreur } = await updateImageCompte(
//         req.file.path,
//         req.body.id
//       );
//       if (erreur != null) {
//         res.status(400).send({ erreur: erreur });
//       } else if (data != null) {
//         res.status(201).send({ message: "image enregistrer", data: data });
//       }
//     }
//   } catch {
//     res.status(400).send({ erreur: "erreur" });
//   }
// });
export default route;
