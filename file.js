const filesystem  = require('fs'); // mengambil package filesystem bawaan nodejs

filesystem.readFile('lorem.txt' , 'uf8', (err, data) => {
   if (err) {
      console.log(err);
   }

   console.log("Halo,nama saya adalah" + data);
});

filesystem.writeFile("alamat.txt", "Jakarta, Indoensia", (err) => {
    if (err) {
    console.log(err);
    }

   });



// readFile = membaca file
// "lorem.txt" = membaca file
// "utf8" = encoding
// buffer = mengambil jika ada eror atau ada data