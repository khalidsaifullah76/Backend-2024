const students = require("../data/students");


class StudentController {
    // Menampilkan semua students
    index(req, res) {
        const data = {
            message: "Menampilkkan semua students",
            data: students,
        };
        
        res.json(data);
    }

    
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

    
    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        const student = students.find(s => s.id === parseInt(id));

       
        if (!student) {
            return res.status(404).json({
                message: `Student dengan id ${id} tidak ditemukan`,
            });
        }

        
        student.nama = nama;

        const data = {
            message: `Mengedit student id ${id}, nama menjadi ${nama}`,
            data: students,
        };

        res.json(data);
    }

   
    destroy(req, res) {
        const { id } = req.params;

        const index = students.findIndex(s => s.id === parseInt(id));

        
        if (index === -1) {
            return res.status(404).json({
                message: `Student dengan id ${id} tidak ditemukan`,
            });
        }

       
        students.splice(index, 1);

        const data = {
            message: `Menghapus student id ${id}`,
            data: students,
        };

        res.json(data);
    }
}


const object = new StudentController();


module.exports = object;
