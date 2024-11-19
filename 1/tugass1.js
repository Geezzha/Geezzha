class Mobil {
    constructor(merk, warna) {
        this.merk = merk;
        this.warna = warna;
    }

    // Metode
    jalan() {
        console.log(`${this.merk} berwarna ${this.warna} sedang berjalan.`);
    }
}

// Pewarisan
class MobilBalap extends Mobil {
    constructor(merk, warna, kecepatanMaksimal) {
        super(merk, warna); // Memanggil konstruktor kelas induk
        this.kecepatanMaksimal = kecepatanMaksimal;
    }

    // Overriding Metode
    jalan() {
        console.log(`${this.merk} balap berwarna ${this.warna} berjalan dengan kecepatan maksimal ${this.kecepatanMaksimal} km/jam.`);
    }
}

// Membuat Objek
const mobil1 = new Mobil('Honda S2000', 'Pink');
mobil1.jalan(); // Output: Toyota berwarna merah sedang berjalan.

const mobilBalap1 = new MobilBalap('Nissan Skyline GT-R R34', 'Silver', 405);
mobilBalap1.jalan(); // Output: Ferrari balap berwarna hitam berjalan dengan kecepatan maksimal 350 km/jam.
