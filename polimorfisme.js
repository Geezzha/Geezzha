// Definisi kelas induk
class Orang {
    tampilkanPeran() {
        console.log("Peran: Orang Kaya");
    }
}

// Definisi kelas turunan
class Mahasiswa extends Orang {
    tampilkanPeran() {
        console.log("Peran: Mahasiswa");
    }
}

class Design extends Orang {
    tampilkanPeran() {
        console.log("Peran: Graphic Designer");
    }
}

class DataAnalyst extends Orang {
    tampilkanPeran() {
        console.log("Peran: Data Analyst ")
    }
}
// Menggunakan polimorfisme
const orang1 = new Orang();
const mahasiswa1 = new Mahasiswa();
const design1 = new Design();
const dataanalyst1 = new DataAnalyst();

orang1.tampilkanPeran();    // Output: Peran: Orang Kaya
mahasiswa1.tampilkanPeran(); // Output: Peran: Mahasiswa
design1.tampilkanPeran();     // Output: Peran: Graphic Designer
dataanalyst1.tampilkanPeran(); //Output: Peran: Data Analyst
