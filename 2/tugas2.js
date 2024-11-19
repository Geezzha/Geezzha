// Definisi kelas Mahasiswa
public class Main {
    // Atribut kelas
    public static class Mahasiswa {
    private String nama;
    private String nim;
    private String jurusan;

    // Konstruktor kelas untuk inisialisasi objek
    public Mahasiswa(String nama, String nim, String jurusan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
    }

    // Metode untuk mendapatkan nama mahasiswa
    public String getNama() {
        return nama;
    }

    // Metode untuk mengubah nama mahasiswa
    public void setNama(String nama) {
        this.nama = nama;
    }

    // Metode untuk menampilkan aktivitas belajar
    public void belajar() {
        System.out.println(nama + " sedang presentasi.");
    }
}

// Implementasi penggunaan kelas Mahasiswa

    public static void main(String[] args) {
        // Membuat objek Mahasiswa
        Mahasiswa mahasiswa1 = new Mahasiswa("Yaya", "123456", "Informatika");
        Mahasiswa mahasiswa2 = new Mahasiswa("Tata", "654321", "Sistem Informasi");

        // Menggunakan metode objek
        mahasiswa1.belajar();  // Output: Yaya sedang presentasi.
        mahasiswa2.belajar();  // Output: Tata sedang presentasi.
    }
}
