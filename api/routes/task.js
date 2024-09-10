import { Router } from 'express'
import { TaskController } from '../controllers/task.js'

export const taskRouter = Router()

taskRouter.get('/', TaskController.getAll)
taskRouter.get('/favorites', TaskController.getFavorites)
taskRouter.patch('/favorites/:id', TaskController.updateFavorite)
taskRouter.patch('/reminder/:id', TaskController.updateReminder)
taskRouter.patch('/dueDate/:id', TaskController.updateDueDate)
taskRouter.delete('/:id', TaskController.delete)
taskRouter.patch('/status/:id', TaskController.updateStatus)
taskRouter.post('/', TaskController.create)
taskRouter.patch('/:id', TaskController.update)
