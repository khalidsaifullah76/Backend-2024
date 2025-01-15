const Alumni = require("../models/Alumni");

class AlumniController {
  // Menampilkan semua alumni
  async index(req, res) {
    try {
      const allAlumnis = await Alumni.all(); // Memanggil method static all()
      
      if (allAlumnis.length === 0) {
        return res.status(200).json({
          message: "Data is empty",
        });
      }
  
      const data = {
        message: "Get All Resource",
        data: allAlumnis,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
      });
    }
  }
  

  // Menambahkan alumni baru
  async store(req, res) {
    const { name, phone, address, graduation_year, status, company_name, position } = req.body;
  
    // Validasi secara manual
    let errors = [];
  
    if (!name) {
      errors.push({ field: 'name', message: 'Nama harus diisi' });
    } else if (name.length > 255) {
      errors.push({ field: 'name', message: 'Nama terlalu panjang, maksimal 255 karakter' });
    }
  
    if (!phone) {
      errors.push({ field: 'phone', message: 'Nomor telepon harus diisi' });
    } else if (!/^\d+$/.test(phone)) {
      errors.push({ field: 'phone', message: 'Nomor telepon hanya boleh berisi angka' });
    }
  
    if (!address) {
      errors.push({ field: 'address', message: 'Alamat harus diisi' });
    } else if (address.length > 500) {
      errors.push({ field: 'address', message: 'Alamat terlalu panjang, maksimal 500 karakter' });
    }
  
    if (!graduation_year) {
      errors.push({ field: 'graduation_year', message: 'Tahun kelulusan harus diisi' });
    } else if (!/^\d+$/.test(graduation_year)) {
      errors.push({ field: 'graduation_year', message: 'Tahun kelulusan harus berupa angka' });
    }
  
    if (!status) {
      errors.push({ field: 'status', message: 'Status harus diisi' });
    }
  
    if (company_name && company_name.length > 255) {
      errors.push({ field: 'company_name', message: 'Nama perusahaan terlalu panjang, maksimal 255 karakter' });
    }
  
    if (position && position.length > 255) {
      errors.push({ field: 'position', message: 'Posisi di perusahaan terlalu panjang, maksimal 255 karakter' });
    }
  
    if (errors.length > 0) {
      return res.status(422).json({
        message: "All fields must be filled correctly",
        errors: errors,
      });
    }
  
    try {
      const newAlumni = await Alumni.create({
        name,
        phone,
        address,
        graduation_year,
        status,
        company_name,
        position,
      });
  
      const data = {
        message: "Berhasil menambahkan data alumni",
        data: newAlumni,
      };
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat menambahkan data",
        error: error.message,
      });
    }
  }
  
  // Mengupdate data alumni
  async update(req, res) {
    const { id } = req.params;
    const { name, phone, address, graduation_year, status, company_name, position } = req.body;

    try {
      const updatedAlumni = await Alumni.update(id, {
        name,
        phone,
        address,
        graduation_year,
        status,
        company_name,
        position,
      });

      if (!updatedAlumni) {
        return res.status(404).json({
          message: `Alumni dengan id ${id} tidak ditemukan`,
        });
      }

      const data = {
        message: "Berhasil mengupdate data alumni",
        data: updatedAlumni,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengupdate data",
        error: error.message,
      });
    }
  }

  // Menghapus alumni
  async destroy(req, res) {
    const { id } = req.params;

    try {
      const isDeleted = await Alumni.delete(id);

      if (!isDeleted) {
        return res.status(404).json({
          message: `Alumni dengan id ${id} tidak ditemukan`,
        });
      }

      const data = {
        message: "Berhasil menghapus data alumni",
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat menghapus data",
        error: error.message,
      });
    }
  }

  // Menampilkan alumni berdasarkan ID
  async show(req, res) {
    const { id } = req.params;

    try {
      const alumni = await Alumni.findById(id);

      if (!alumni) {
        return res.status(404).json({
          message: `Alumni dengan id ${id} tidak ditemukan`,
        });
      }

      const data = {
        message: "Menampilkan data alumni",
        data: alumni,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
      });
    }
  }

  // Menampilkan alumni berdasarkan name
  async search(req, res) {
    const { name } = req.params;
  
    try {
      const alumni = await Alumni.search(name);  // Memanggil metode search dari model Alumni
  
      if (alumni.length === 0) {
        return res.status(404).json({
          message: `Alumni dengan nama ${name} tidak ditemukan`,
        });
      }
  
      const data = {
        message: "Menampilkan data alumni",
        data: alumni,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
      });
    }
  }
  async search(req, res) {
    const { status } = req.query;  // Menggunakan req.query untuk mengambil parameter query
  
    try {
      const alumni = await Alumni.findByStatus(status);  // Panggilan ke metode statik findByName
  
      if (alumni.length === 0) {
        return res.status(404).json({
          message: `Alumni dengan nama ${status} tidak ditemukan`,
        });
      }
  
      const data = {
        message: "Menampilkan data status alumni",
        data: alumni,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data",
        error: error.message,
      });
    }
  }
  async getFreshGraduate(req, res) {
    try {
      const freshGraduates = await Alumni.findByStatus('fresh-graduate');  // Panggilan ke model untuk mendapatkan alumni yang baru lulus
      if (freshGraduates.length === 0) {
        return res.status(404).json({
          message: "Fresh graduate resource is empty",
        });
      }

      const data = {
        message: "Get fresh graduate resource",
        total: freshGraduates.length,
        data: freshGraduates,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data fresh graduate",
        error: error.message,
      });
    }
  }

  // Get Employed Resource
  async getEmployed(req, res) {
    try {
      const employedResources = await Alumni.findByStatus('employed');  // Panggilan ke model untuk mendapatkan alumni yang sudah bekerja
      if (employedResources.length === 0) {
        return res.status(404).json({
          message: "Employed resource is empty",
        });
      }

      const data = {
        message: "Get employed resource",
        total: employedResources.length,
        data: employedResources,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data employed",
        error: error.message,
      });
    }
  }

  // Get Unemployed Resource
  async getUnemployed(req, res) {
    try {
      const unemployedResources = await Alumni.findByStatus('unemployed');  // Panggilan ke model untuk mendapatkan alumni yang belum bekerja
      if (unemployedResources.length === 0) {
        return res.status(404).json({
          message: "Unemployed resource is empty",
        });
      }

      const data = {
        message: "Get unemployed resource",
        total: unemployedResources.length,
        data: unemployedResources,
      };
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({
        message: "Terjadi kesalahan saat mengambil data unemployed",
        error: error.message,
      });
    }
  }
}
// Membuat object AlumniController
const object = new AlumniController();

// Export object AlumniController
module.exports = object;
