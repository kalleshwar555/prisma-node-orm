import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const { user, post } = new PrismaClient();

router.get("/:authorId", async (req, res) => {
  const { authorId } = req.params;

  let posts = await post.findMany({
    where: {
      authorId: parseInt(authorId),
    },
    select: {
      title: true,
      createdAt: true,
      content: true,
      author: true,
    },
  });

  res.send(posts);
});

router.post("/", async (req, res) => {
  console.log("body>>>", req.body);
  const { title, authorId, content } = req.body;

  let userExists = await user.findUnique({
    where: {
      id: authorId,
    },
  });

  if (!userExists) {
    return res.status(400).json({
      msg: "user not found",
    });
  }

  let newPost = await post.create({
    data: {
      title,
      authorId,
      content: content,
    },
  });

  res.json(newPost);
});

module.exports = router;
