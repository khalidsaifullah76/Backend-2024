const Student = require("../models/Student");

class StudentController {
  // Mendapatkan seluruh resource
  async index(req, res) {
    try {
      const students = await Student.all();
      const data = {
        message: "Menampilkan data student",
        data: students,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
      });
    }
  }

  // Menyimpan data baru
  async store(req, res) {
    try {
      const { nama, nim, email, jurusan } = req.body; // Data dari request body
      const newStudent = await Student.create({ nama, nim, email, jurusan });

      const data = {
        message: `Data student ${nama} berhasil ditambahkan`,
        data: newStudent,
      };
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan data",
        error: error.message,
      });
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
