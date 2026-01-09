const express = require("express");
const router = express.Router();
const { Task } = require("../models");
const auth = require("../middleware/auth");
// GET all tasks
router.get("/", auth, async (req, res) => {
  const tasks = await Task.findAll({ where: { userId: req.user.id } });
  res.json(tasks);
});

// CREATE task
router.post("/", auth, async (req, res) => {
  const task = await Task.create({ title: req.body.title, userId: req.user.id });
  res.json(task);
});

// UPDATE task
router.put("/:id", auth, async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.userId !== req.user.id) return res.status(403).json({ message: "Not authorized" });
  task.title = req.body.title;
  await task.save();
  res.json(task);
});

// DELETE task
router.delete("/:id", auth, async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  if (task.userId !== req.user.id) return res.status(403).json({ message: "Not authorized" });
  await task.destroy();
  res.json({ message: "Task deleted" });
});

module.exports = router;
