class Nilai {
    constructor(nilai) {
        this.nilai = nilai;
    }

    hitungRataRata() {
        if (!Array.isArray(this.nilai) || this.nilai.length === 0) {
            throw new Error("Data nilai tidak valid atau kosong.");
        }
        const total = this.nilai.reduce((acc, curr) => acc + curr, 0);
        return total / this.nilai.length;
    }
}

class NilaiView {
    render(rataRata) {
        return `
            <div class="nilai-card">
                <p>Rata-rata nilai: ${rataRata}</p>
            </div>
        `;
    }

    renderError(error) {
        return `
            <div class="nilai-card error">
                <p>Error: ${error}</p>
            </div>
        `;
    }
}

class NilaiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    tampilkanRataRata(nilai) {
        try {
            const modelNilai = new this.model(nilai);
            const rataRata = modelNilai.hitungRataRata();
            document.getElementById("output").innerHTML = this.view.render(rataRata);
        } catch (error) {
            document.getElementById("output").innerHTML = this.view.renderError(error.message);
        }
    }
}

// Fungsi pembagian
function bagi(a, b) {
    try {
        if (b === 0) {
            throw new Error("Pembagian dengan nol tidak diperbolehkan.");
        }
        return a / b;
    } catch (error) {
        console.error("Terjadi error:", error.message);
    } finally {
        console.log("Operasi pembagian selesai.");
    }
}

// Inisialisasi dan Penggunaan
const nilaiController = new NilaiController(Nilai, NilaiView);
nilaiController.tampilkanRataRata([80, 90, 100]); // Menampilkan rata-rata
nilaiController.tampilkanRataRata([]);            // Menampilkan error: Data nilai tidak valid atau kosong.

console.log(bagi(10, 2));  // Output: 5
console.log(bagi(20, 2));  // Output: 10.
