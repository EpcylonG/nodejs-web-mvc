const Router = require("express").Router;

const { authMiddleware } = require("../middleware/auth-middleware");
const userController = require("../controllers/user-controller");
const UserRouter = Router();

UserRouter.use("/users", authMiddleware);

UserRouter.get("/user", userController.getUsers);
UserRouter.get("/user/:userId", userController.getUserDetails);
UserRouter.post("/user", userController.createUser);
UserRouter.patch("/user/:userId", userController.updateUser);
UserRouter.delete("/user/:userId", userController.deleteUser);

UserRouter.post("/sign-up", authMiddleware, userController.signUp);

module.exports = UserRouter;
