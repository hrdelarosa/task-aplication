import { TasksModel } from '../models/database/task.js'

export class TaskController {
  static async getAll (req, res) {
    const tasks = await TasksModel.getAll()

    res.json(tasks)
  }

  static async getFavorites (req, res) {
    const tasks = await TasksModel.getFavorites()

    res.json(tasks)
  }

  static async updateFavorite (req, res) {
    const { id } = req.params
    const updateStatus = await TasksModel.updateFavorite({ input: req.body, id})

    res.status(200).json(updateStatus)
  }

  static async updateReminder (req, res) {
    const { id } = req.params
    const updateRemind = await TasksModel.updateReminder({ input: req.body, id})

    res.status(200).json(updateRemind)
  }

  static async updateDueDate (req, res) {
    const { id } = req.params
    const updateDueDate = await TasksModel.updateDueDate({ input: req.body, id})

    res.status(200).json(updateDueDate)
  }
  
  static async delete (req, res) {
    const { id } = req.params
    const deleteTask = await TasksModel.delete({ id })

    res.status(200).json(deleteTask)
  }

  static async updateStatus (req, res) {
    const { id } = req.params
    const statusUpdate = await TasksModel.updateStatus({ input: req.body, id})

    res.status(200).json(statusUpdate)
  }

  static async create (req, res) {
    if (req.body === '') return res.status(400).json({ error: 'the task should not be empty' })
    const newTask = await TasksModel.create({ input: req.body })

    res.status(201).json(newTask)
  }


  static async update (req, res) {
    const { id } = req.params
    const updateTask = await TasksModel.update({ input: req.body, id })

    res.status(200).json(updateTask)
  }
}
