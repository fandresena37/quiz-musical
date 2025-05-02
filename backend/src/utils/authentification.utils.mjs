import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcryptjs";
const prisma = new PrismaClient();
export const selectAllUser = async () => {
  let erreur = null;
  const data = await prisma.User.findMany();
  if (!data) {
    erreur = "Erreur lors de la recuperation des données";
  }
  return { data, erreur };
};

export const addUser = async ({ username, password, email }) => {
  let erreur = null;
  let data = null;
  const user = await prisma.User.findFirst({
    where: {
      username: username,
    },
  });
  if (!user) {
    data = await prisma.User.create({
      data: {
        username: username,
        email: email,
        password: await bcrypt.hash(password, 10),
      },
    });
    if (!data) {
      erreur = "erreur de creation de User";
    }
  } else {
    erreur = "username existe deja";
  }
  return { data, erreur };
};

export const selectUser = async ({ username, password }) => {
  let erreur = null;
  let data = null;
  try {
    const user = await prisma.User.findFirst({
      where: {
        username: username,
      },
    });
    if (user) {
      if (await bcrypt.compare(password, user.password)) {
        data = user;
      } else {
        erreur = "mot de passe incorrect";
      }
    } else {
      erreur = "username incorrect";
    }
  } catch {
    erreur = "erreur";
  }
  return { data, erreur };
};

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (req.body.id) {
//       const uploadPath = path.resolve(
//         "../../../projetWEB/Frontend/React/musiqueSocial/public/profil"
//       );
//       if (!fs.existsSync(uploadPath)) {
//         fs.mkdirSync(uploadPath, { recursive: true });
//       }
//       cb(null, uploadPath);
//     } else {
//       throw new Error("erreur");
//     }
//   },
//   filename: (req, file, cb) => {
//     if (req.body.id) {
//       const ImageName =
//         "profil-" +
//         req.body.id +
//         "." +
//         path.extname(file.originalname).split(".")[1];
//       cb(null, ImageName);
//     } else {
//       throw new Error("erreur");
//     }
//   },
// });
// export const upload = multer({ storage: storage });

// export const updateImageUser = async (pathImage, id) => {
//   let data = null;
//   let erreur = null;
//   console.log(pathImage);
//   try {
//     data = await prisma.User.update({
//       where: {
//         id: id,
//       },
//       data: {
//         img_path: pathImage,
//       },
//     });
//     if (!data) {
//       erreur = "erreur";
//     }
//   } catch {
//     erreur = "erreur";
//   }
//   return { data, erreur };
// };
