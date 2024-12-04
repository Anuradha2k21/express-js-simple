const db = require("./db");

class UserModel {
  static async getAllUsers() {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  }

  static async getUserById(id) {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  }

  static async createUser(userData) {
    const { name, email } = userData;
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    );
    return result.insertId;
  }

  static async updateUser(id, userData) {
    const { name, email } = userData;
    const [result] = await db.query(
      "UPDATE users SET name = ?, email = ? WHERE id = ?",
      [name, email, id]
    );
    return result.affectedRows > 0;
  }

  static async deleteUser(id) {
    const [result] = await db.query("DELETE FROM users WHERE id = ?", [id]);
    return result.affectedRows > 0;
  }
}

module.exports = UserModel;
