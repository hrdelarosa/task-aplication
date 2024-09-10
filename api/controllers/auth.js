import { AuthModel } from '../models/database/auth.js'

export class AuthController {
  static async register (req, res) {
    const user = await AuthModel.register({ input: req.body })

    res.status(200).json(user)
  }
}
