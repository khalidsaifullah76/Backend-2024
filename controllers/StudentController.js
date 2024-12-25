const students = require("../data/students");

// Membuat Class StudentController
class StudentController {
    // Menampilkan semua students
    index(req, res) {
        const data = {
            message: "Menampilkkan semua students",
            data: students,
        };
        
        res.json(data);
    }

    // Menambahkan student baru
    store(req, res) {
        const { nama } = req.body;
        
        const id = students.length + 1;
        students.push({ id, nama });

        const data = {
            message: `Menambahkan data student: ${nama}`,
            data: students,
        };
        
        res.json(data);
    }

    // Mengupdate data student
    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const student = students.find(s => s.id === parseInt(id));

        // Jika student tidak ditemukan
        if (!student) {
            return res.status(404).json({
                message: `Student dengan id ${id} tidak ditemukan`,
            });
        }

        // Update nama student
        student.nama = nama;

        const data = {
            message: `Mengedit student id ${id}, nama menjadi ${nama}`,
            data: students,
        };

        res.json(data);
    }

    // Menghapus student
    destroy(req, res) {
        const { id } = req.params;

        const index = students.findIndex(s => s.id === parseInt(id));

        // Jika student tidak ditemukan
        if (index === -1) {
            return res.status(404).json({
                message: `Student dengan id ${id} tidak ditemukan`,
            });
        }

        // Hapus student berdasarkan index
        students.splice(index, 1);

        const data = {
            message: `Menghapus student id ${id}`,
            data: students,
        };

        res.json(data);
    }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
