const db = require('../models');

exports.createTask = async (req, res) => {
  const task = await db.Task.create({
    title: req.body.title,
    userId: req.user.id
  });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await db.Task.findAll({
    where: { userId: req.user.id }
  });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  await db.Task.update(
    { status: req.body.status },
    { where: { id: req.params.id, userId: req.user.id } }
  );
  res.json({ msg: "Updated" });
};

exports.deleteTask = async (req, res) => {
  await db.Task.destroy({
    where: { id: req.params.id, userId: req.user.id }
  });
  res.json({ msg: "Deleted" });
};