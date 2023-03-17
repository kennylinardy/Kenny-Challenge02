  function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];


  // Tulis code-mu disini
   
  /*
  Looping dibawah ini akan mengecek index i dimulai dari index kedua dan akan berhenti sampai akhir index array.
  Looping dimulai dari index kedua karena pada perulangan while dibawah, looping akan langsung melakukan perbandingan dengan index pertama.
  
  0 = 2022
  1 = 2021
  */
  for(let i = 1; i < result.length; i++) {
    /* 
    Looping dibawah ini akan mengecek index j yang mengikuti value i.
    Ketika j > 0 dan year pada result index j - 1 lebih besar daripada tahun pada result index j, maka lakukan
      Deklarasi temp sebagai wadah menyimpan value index result[j].year
      result[j - 1] akan menjadi value result[j]
      result[j] akan mengambil value pada temp
      j akan dikurangi satu
    Jika kondisi j > 0 && result[j - 1]. year lebih besar daripada result[j].year, maka ulangi perulangan.
    */
    let j = i;
    while (j > 0  && result[j - 1].year > result[j].year) {
      // temp digunakan sebagai wadah menempatkan value result[j]
      let temp = result[j - 1];
      // EXAMPLE
      // result[j - 1] = 2022
      // temp = 2022
      // Value index j - 1 akan disimpan pada variabel temp
      result[j - 1] = result[j];
      // Value result[j - 1] akan menjadi value result[j]
      result[j] = temp;
      // result[j] akan mengambil value variabel temp
      j--;
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
