//==========|
//  Soal 2  |
//==========|

// Algoritma:
// 1. Cek apakah hari antara 1-31, jika tidak tampilkan error
// 2. Cek apakah bulan antara 1-12, jika tidak tampilkan error
// 3. Gunakan switch case untuk mengubah angka bulan menjadi nama bulan
// 4. Gabungkan hari, bulan, dan tahun menjadi format yang diinginkan

let hari = 8; // hari antara 1 - 31
let bulan = 3; // bulan antara 1 - 12
let tahun = 2008; // tahun antara 1900 - 2200

let bulanAhh = "";

switch (bulan) {
  case 1:
    bulanAhh = "Januari";
    break;
  case 2:
    bulanAhh = "Februari";
    break;
  case 3:
    bulanAhh = "Maret";
    break;
  case 4:
    bulanAhh = "April";
    break;
  case 5:
    bulanAhh = "Mei";
    break;
  case 6:
    bulanAhh = "Juni";
    break;
  case 7:
    bulanAhh = "Juli";
    break;
  case 8:
    bulanAhh = "Agustus";
    break;
  case 9:
    bulanAhh = "September";
    break;
  case 10:
    bulanAhh = "Oktober";
    break;
  case 11:
    bulanAhh = "November";
    break;
  case 12:
    bulanAhh = "Desember";
    break;
  default:
    console.log("Bulan tidak valid!");
    return;
}

if (hari < 1 || hari > 31) {
  console.log("Hari tidak valid!");
} else if (tahun < 1900 || tahun > 2200) {
  console.log("Tahun tidak valid!");
} else {
  console.log(`Jawa : tanggal yang kamu pilih adalah "${hari} ${bulanAhh} ${tahun}";`);
}
