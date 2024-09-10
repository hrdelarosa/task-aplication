import { readJSON } from '../../utils/taskJson.js'
import { randomUUID } from 'node:crypto'

const tasks = readJSON('../tasks.json')

export class TasksModel {
  static async getAll () {
    return tasks
  }

  static async create ({ input }) {
    const newTask = {
      id: randomUUID(),
      ...input,
      createAt: new Date()
    }

    tasks.push(newTask)

    return newTask
  }
}
