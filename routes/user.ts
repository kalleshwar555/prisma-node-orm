import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const { user } = new PrismaClient();

router.get("/", async (req: Request, res: Response) => {
  const users = await user.findMany({
    select: {
      name: true,
      email: true,
    },
    where: {
      name: "Kalleshwar",
    },
  });
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, email } = req.body;

  // const userExists = await user.findUnique({
  //   select: {
  //     name: true,
  //   },
  //   where: {
  //     name,
  //   },
  // });

  // if (userExists) {
  //   return res.status(400).json({
  //     msg: "user already exists",
  //   });
  // }

  let newUser = await user.create({
    data: {
      name,
      email,
    },
  });

  res.json(newUser);
});

module.exports = router;
