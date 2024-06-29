import { Router } from "express";
import {
  LoginValidation,
  SignUpValidation,
  validationMiddleWare,
} from "../validation/index.js";
import { createAdmin } from "../controllers/createAdmin.js";
import loginAdmin from "../controllers/loginAdmin.js";
import { Statuses } from "../../constant.js";

const adminRouter = Router();

adminRouter.get("/", async (req, res) => {
  res.status(Statuses.HTTP_OK).send("here is the admin route /");
});
adminRouter.post(
  "/register",
  validationMiddleWare(SignUpValidation),
  createAdmin
);
adminRouter.post("/login", validationMiddleWare(LoginValidation), loginAdmin);

export default adminRouter;
