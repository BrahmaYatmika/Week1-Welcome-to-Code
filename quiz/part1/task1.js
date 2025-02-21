//==========|
//  Soal 1  |
//==========|

// Algoritma:
// 1. Cek apakah nama kosong, jika iya tampilkan pesan "nama wajib diisi"
// 2. Jika nama ada, cek apakah peran kosong, jika iya tampilkan pesan "Pilih Peranmu untuk memulai game"
// 3. Jika peran diisi, cek apakah peran adalah Ksatria, Tabib, atau Penyihir
// 4. Jika sesuai, tampilkan pesan sesuai peran
// 5. Jika tidak sesuai, tampilkan pesan bahwa peran tidak tersedia

let nama = "Jawa"; // ganti dengan nama yang diinginkan
let peran = "penyihir"; // ganti dengan peran yang diinginkan (Ksatria, Pemanah, Penyihir)

if (nama === "") {
  console.log("nama wajib diisi!");
} else if (peran === "") {
  console.log("pilih Peranmu untuk memulai game");
} else {
  if (peran === "ksatria") {
    console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
  } else if (peran === "pemanah") {
    console.log(
      `Halo Pemanah ${nama}, kamu dapat menyerang musuh dari jarak jauh.`
    );
  } else if (peran === "penyihir") {
    console.log(
      `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
    );
  } else {
    console.log(
      "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada."
    );
  }
}
