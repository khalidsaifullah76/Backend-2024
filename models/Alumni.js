const db = require("../config/database");

class Alumni {
  /**
   * Membuat method static all.
   */
  static all() {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from alumnis";
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
      const sql = "INSERT INTO alumnis SET ?";
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
      const sql = "UPDATE alumnis SET ? WHERE id = ?";
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
      const sql = "DELETE FROM alumnis WHERE id = ?";
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
      const sql = "SELECT * FROM alumnis WHERE id = ?";
      db.query(sql, [id], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]); 
        }
      });
    });
  }
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM alumnis WHERE name LIKE ?";
      db.query(sql, [`%${name}%`], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  static search(name) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM alumnis WHERE name LIKE ?";
      db.query(sql, [`%${name}%`], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
  static findByStatus(status) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM alumnis WHERE status = ?";
      db.query(sql, [status], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  }
}

module.exports = Alumni;
