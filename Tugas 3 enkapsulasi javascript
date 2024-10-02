// Model Mahasiswa
class Mahasiswa {
    constructor(nama, nim, nilai) {
        this.nama = nama;  // Atribut publik
        this.nim = nim;    // Atribut publik
        let _nilai = nilai; // Atribut private menggunakan closure

        // Getter untuk mengakses nilai
        this.getNilai = function() {
            return _nilai;
        };

        // Setter untuk mengubah nilai dengan validasi
        this.setNilai = function(nilaiBaru) {
            if (nilaiBaru >= 0 && nilaiBaru <= 100) {
                _nilai = nilaiBaru;
            } else {
                console.log("Nilai harus antara 0 dan 100");
            }
        };
    }
}

// View Mahasiswa
class MahasiswaView {
    render(mahasiswa) {
        return `
Data Mahasiswa:
Nama: ${mahasiswa.nama}
NIM: ${mahasiswa.nim}
Nilai: ${mahasiswa.getNilai()}
        `;
    }
}

// Controller Mahasiswa
class MahasiswaController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanMahasiswa() {
        const mahasiswa = new this.model("Gizza", "202301110036", 85);
        console.log(this.view.render(mahasiswa));
    }

    ubahNilai(nama, nim, nilaiBaru) {
        const mahasiswa = new this.model(nama, nim, 0);
        mahasiswa.setNilai(nilaiBaru);
        console.log(`${nama} memiliki nilai baru: ${mahasiswa.getNilai()}`);
    }
}

// Inisialisasi dan Penggunaan
const mahasiswaView = new MahasiswaView();
const mahasiswaController = new MahasiswaController(Mahasiswa, mahasiswaView);

// Menampilkan data mahasiswa awal
mahasiswaController.tampilkanMahasiswa();

// Mengubah nilai mahasiswa
mahasiswaController.ubahNilai("Gizza", "202301110036", 95);
