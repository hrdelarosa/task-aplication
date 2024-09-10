import { connection } from '../../utils/conecctionAuth.js'
import bcrypt from 'bcrypt'

export class AuthModel {
  static async register ({ input }) {
    const { userName, password } = input

    const hashedPassword = await bcrypt.hash(password, 8) 

    console.log(userName, hashedPassword)

    return 'Usuario registrado'
  }
}
