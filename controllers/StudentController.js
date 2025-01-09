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
      const { nama, nim, email, jurusan } = req.body; 
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

  // Update data
  async update(req, res) {
    try {
      const { id } = req.params; 
      const { nama, nim, email, jurusan } = req.body; 

      if (!nama || !nim || !email || !jurusan) {
        return res.status(400).json({
          message: "Semua field harus diisi",
        });
      }

      const studentId = parseInt(id, 10); 
      const updatedStudent = await Student.update(studentId, { nama, nim, email, jurusan }); 

      if (updatedStudent) {
        const data = {
          message: `Data student dengan ID ${studentId} berhasil diperbarui`,
          data: updatedStudent,
        };
        res.status(200).json(data);
      } else {
        res.status(404).json({
          message: `Student dengan ID ${studentId} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat memperbarui data",
        error: error.message,
      });
    }
  }

  // Hapus data
  async delete(req, res) {
    try {
      const { id } = req.params; 
      const studentId = parseInt(id, 10); 

      const deletedStudent = await Student.delete(studentId); 

      if (deletedStudent) {
        const data = {
          message: `Data student dengan ID ${studentId} berhasil dihapus`,
        };
        res.status(200).json(data);
      } else {
        res.status(404).json({
          message: `Student dengan ID ${studentId} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat menghapus data",
        error: error.message,
      });
    }
  }

  // Menampilkan data
  async show(req, res) {
    try {
      const { id } = req.params; 
      const studentId = parseInt(id, 10); 
      const student = await Student.findById(studentId); 

      if (student) {
        const data = {
          message: `Menampilkan data student dengan ID ${studentId}`,
          data: student,
        };
        res.status(200).json(data);
      } else {
        res.status(404).json({
          message: `Student dengan ID ${studentId} tidak ditemukan`,
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
      });
    }
  }
}

module.exports = new StudentController();
