import { connection } from '../../utils/conecction.js'

export class TasksModel {
  static async getAll () {
    const [task] = await connection.query('SELECT BIN_TO_UUID(id) AS id, title, description, due_date, status, created_at, favorite, updated_at, remind_at FROM tasks ORDER BY created_at DESC;')

    return task
  }

  static async getFavorites () {
    const [task] = await connection.query('SELECT BIN_TO_UUID(id) AS id, title, description, due_date, status, created_at, favorite, updated_at, remind_at FROM tasks WHERE favorite = 1;')

    return task
  }

  static async updateFavorite ({ input, id }) {
    const { favorite } = input

    try {
      connection.query('UPDATE tasks SET favorite = ? WHERE id = UUID_TO_BIN(?);', [favorite, id])
    } catch (error) {
      console.error(error)
      return new Error('Error updating Task favorite')
    }

    return 'Task favorite has been updated'
  }

  static async updateReminder ({ input, id }) {
    const { date } = input

    try {
      connection.query('UPDATE tasks SET remind_at = ? WHERE id = UUID_TO_BIN(?);', [date, id])
    } catch (error) {
      console.error(error)
      return new Error('Error updating Task remind date')
    }

    return 'Task remind date has been updated'
  }

  static async updateDueDate ({ input, id }) {
    const { date } = input

    try {
      connection.query('UPDATE tasks SET due_date = ? WHERE id = UUID_TO_BIN(?);', [date, id])
    } catch (error) {
      console.error(error)
      return new Error('Error updating Task due date')
    }

    return 'Task due date has been updated'
  }

  static async delete ({ id }) {
    try {
      connection.query('DELETE FROM tasks WHERE id = UUID_TO_BIN(?);', id)
    } catch (error) {
      return new Error('Error deleting Task')
    }
    
    return 'The task has been successfully deleted'
  }

  static async updateStatus ({ input, id }) {
    const { status } = input

    try {
      connection.query('UPDATE tasks SET status = ? WHERE id = UUID_TO_BIN(?);', [status, id])
    } catch (error) {
      console.error(error)
      return new Error('Error updating Task status')
    }

    return 'Task status has been updated'
  }

  static async create ({ input }) {
    const { title, description, due_date, status, favorite, remind_at } = input

    try {
      await connection.query('INSERT INTO tasks (title, description, due_date, status, favorite, remind_at) VALUES(?, ?, ?, ?, ?, ?);', [title, description, due_date, status, favorite, remind_at])
    } catch (error) {
      return new Error('Error crating Task')
    }

    // const [newTask] = await connection.query('SELECT BIN_TO_UUID(id) AS id, task, createAt, statusAt FROM tasks WHERE task = ?;', task)
    return 'A new task has been created'
  }


  static async update ({ input, id }) {
    const { title, description } = input

    try {
      connection.query('UPDATE tasks SET title = ?, description = ? WHERE id = UUID_TO_BIN(?);', [title, description, id])
    } catch (error) {
      return new Error('Error updating the task')
    }

    return 'The task has been updated'
  }
}
