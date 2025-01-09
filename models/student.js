// import database
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        if (err) {
          reject(err); // Jika ada error, reject promise
        } else {
          resolve(results); // Jika berhasil, resolve promise
        }
      });
    });
  }

  /**
   * Method untuk insert data.
   * Menerima parameter data yang akan diinsert.
   * Mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    return new Promise((resolve, reject) => {
      // Query SQL untuk insert data
      const sql = "INSERT INTO students SET ?";

      // Menjalankan query
      db.query(sql, data, (err, results) => {
        if (err) {
          reject(err); // Reject jika ada error
        } else {
          // Mengembalikan data dengan id yang baru diinsert
          resolve({
            id: results.insertId,
            ...data,
          });
        }
      });
    });
  }
}

// export class Student
module.exports = Student;
