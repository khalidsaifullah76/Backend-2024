const db = require("../config/database");

class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      db.query(sql, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }

  /**
   * Method untuk insert data.
   */
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve({
            id: results.insertId,
            ...data,
          });
        }
      });
    });
  }

  /**
   * Method untuk update data.
   */
  static update(id, data) {
    return new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          if (results.affectedRows > 0) {
            resolve({
              id: id,
              ...data,
            });
          } else {
            resolve(null);
          }
        }
      });
    });
  }

  /**
   * Method untuk menghapus data.
   */
  static delete(id) {
    return new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.affectedRows > 0); 
        }
      });
    });
  }

  /**
   * Method untuk mencari data berdasarkan ID.
   */
  static findById(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]); 
        }
      });
    });
  }
}

module.exports = Student;
