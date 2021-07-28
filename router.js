import Router from "express";
import PostContriller from "./PostController.js";

const router = new Router();

router.post("/posts", PostContriller.create);
router.get("/posts", PostContriller.getAll);
router.get("/posts/:id", PostContriller.getOne);
router.put("/posts", PostContriller.update);
router.delete("/posts/:id", PostContriller.delete);

export default router;
