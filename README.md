sebuah program yang berfungsi mengubah isi story kontak wa kamu menjadi yang kamu inginkan!, tenang saja file story nya tidak hilang tetapi dipindahkan ke folder <b>storyWa</b>

## cara kerja
* clone repo ini di <b>storage/shared</b>
* install nodejs (jika belum)
* ketik perintah <b>npm install --no-bin-link</b>
* pindahkan beberapa foto yang ingin dijadikan hasil ke folder <b>fileToChange</b>
* ketik <b>npm run change</b> untuk mengubah story
* ketik <b>npm run backup</b> untuk mengbackup story
* coba lihat apakah hasilnya berhasil

## note
1. story yang di ubah hanya story yang sudah kamu lihat sebelumnya.
2. jangan menjalankan <b>npm run change</b> 2x secara <b>berurutan!</b>
3. Jika mengabaikan nomer 2, story yang telah di ubah akan ter overwrite oleh proses sebelumnya dan mengakibatkan story tersebut <b>terhapus!</b>